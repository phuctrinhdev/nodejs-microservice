import { CrudService, ICrudOption } from '../crudService.pg'
import { Product, Shop, ProductShop, Country, Food, Review, FoodProduct } from '@/models/tables'

import {
    sequelize
} from '@/models'
import axios from 'axios';
import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
import { config } from '@/config'
const jsdom = require("jsdom");
const { Translate } = require('../../../node_modules/@google-cloud/translate').v2;
const translate = new Translate();
const { JSDOM } = jsdom;
var _ = require('lodash');
export class ProductService extends CrudService<typeof Product> {
    constructor() {
        super(Product)
    }
    async search(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        const products = await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        );
        if (option.offset === 0) {
            const option2 = JSON.parse(JSON.stringify(option));
            option2.limit = 99999999;
            const products2 = await this.exec(
                this.modelWithScope(option.scope)
                    .findAll(this.applyFindOptions(option2))
            )
            products.count = products2.length;
        }
        return products;
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        const products = await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
        if (option.offset === 0) {
            const option2 = JSON.parse(JSON.stringify(option));
            option2.limit = 99999999;
            const products2 = await this.exec(
                this.modelWithScope(option.scope)
                    .findAll(this.applyFindOptions(option2))
            )
            products.count = products2.length;
        }
        return products;
    }
    async statistic(params: any, option?: ICrudOption) {
        const redWine = await this.exec(this.model.count({
            where: {
                displayed_vivino_wine_type: "Red Wine",
                maybe_duplicate: false,
                not_in_use: false
            }
        }));
        const whiteWine = await this.exec(this.model.count({
            where: {
                displayed_vivino_wine_type: "White Wine",
                maybe_duplicate: false,
                not_in_use: false
            }
        }));
        let rating = 4;
        let ratingWine = await this.exec(this.model.count({
            where: {
                rating: { $gte: 4 }
            }
        }));
        return {
            red_wine: redWine,
            white_wine: whiteWine,
            rating_wine: ratingWine,
            rating: rating
        }
    }
    async checkIssetAndCreate(params: any, option?: ICrudOption) {
        const {
            items
        } = params;
        const results: any = [];
        const transaction = await sequelize.transaction();
        try {
            for (let i = 0; i < items.length; i++) {
                let item = await this.exec(this.model.findOne({
                    where: {
                        name: items[i].name
                    }
                }));
                if (item) {
                    const body: any = {
                        product_id: item.id,
                        shop_id: items[i].shop_id,
                        price: items[i].price,
                        name_in_the_shop: item.name
                    }
                    await this.exec(this.model.update(
                        {
                            amount_shop_sell: item.amount_shop_sell + 1
                        },
                        {
                            where: {
                                id: item.id
                            }
                        }
                    ));
                    await this.exec(ProductShop.create(body, { transaction }))
                } else {
                    item = await this.exec(this.model.create(items[i], { transaction }))
                    const body: any = {
                        product_id: item.id,
                        shop_id: items[i].shop_id,
                        price: items[i].price,
                        name_in_the_shop: items[i].name
                    }
                    await this.exec(ProductShop.create(body, { transaction }))
                }
                if (i === items.length - 1) {
                    await this.exec(Shop.update(
                        { crawled: true },
                        {
                            where: {
                                id: items[i].shop_id,
                            },
                            transaction
                        }))
                }
                results.push(item)
            }
            transaction.commit();
            return results
        }
        catch (e) {
            transaction.rollback();
            throw e;
        }
    }
    async checkIssetAndUpdatePrice(params: any, option?: ICrudOption) {
        const {
            items
        } = params;
        const results: any = [];
        const transaction = await sequelize.transaction();
        try {
            for (let i = 0; i < items.length; i++) {
                let item = await this.exec(this.model.findOne({
                    where: {
                        shop_id: items[i].shop_id,
                        name: items[i].name
                    }
                }));
                if (!item) {
                    item = await this.exec(this.model.create(items[i], { transaction }))
                    const body: any = {
                        product_id: item.id,
                        shop_id: items[i].shop_id
                    }
                    await this.exec(ProductShop.create(body, { transaction }))
                } else {
                    if (item.price !== items[i].price) {
                        await this.exec(this.model.update(
                            { price: items[i].price },
                            {
                                where: {
                                    id: item.id,
                                },
                                transaction
                            }))
                        await this.exec(ProductShop.update(
                            { price: items[i].price },
                            {
                                where: {
                                    product_id: item.id,
                                    shop_id: item.shop_id
                                },
                                transaction
                            }))
                    }
                }
                results.push(item)
            }
            transaction.commit();
            return results
        }
        catch (e) {
            transaction.rollback();
            throw e;
        }
    }
    async crawlDataProductPageFromVivino(body: any) {
        try {
            //use axios to get vivino_id
            let string_dom = await axios.get(body.link);
            const dom = new JSDOM(string_dom.data);
            const meta_tag = dom.window.document.querySelector("meta[name='twitter:app:url:iphone']").getAttribute("content");
            let split_link = body.link.split('/');
            if (split_link.length < 6) {
                throw errorService.database.invalidScope("Link is not valid, please check again");
            }
            let vivino_id = meta_tag.split('=')[1];
            //use axios to call API of vivino, get item wine
            let vivino_link = 'https://www.vivino.com/api/vintages/' + vivino_id + '/vintage_page_information';
            const headers = {
                'User-Agent': 'PostmanRuntime/7.17.1',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Postman-Token': '6aee79bb-6dfe-404b-8e85-eaae722c36c3',
                'Host': 'www.vivino.com',
                'Accept-Encoding': 'gzip, deflate',
                'Cookie': '_ruby-web_session=TVdrWlllQ0RVczhTMGEwK3Y5NHpFYURVNnR5cXI0bklsWnRkdkxwRkkyVVVVUTdsanFkQWdZUDB6V1ZZRmsvUmFtS0xJR2FiNVZUOUd4SmJoQ3c0OHZ0STcrdVBYeGJvdnBvaWRGaUgyV2o4dHcveXdLNkFlVmIvNkQ3ekNYVkMrc25tZm9May9CVG0vek8vamlWYVNlQWFjVkhRdnRpbE9IbUhkQXpXc1lMUUtIZEhmWFk3WEJ5Q3dQZExVOHFULS1ZcGhSd295ZkpRaDdnUyt4WGxFaTRBPT0%3D--948b379d5474663a1fe6e3a2d5c1be092543ff4d',
                'Connection': 'keep-alive'
            };
            let res = await axios.get(vivino_link, { headers });
            let item = res.data.vintage_page_information;
            //use axios to call API get wine type
            let vivino_link_get_wine_type = 'https://www.vivino.com/api/explore/explore?wine_type_ids[]=' + item.vintage.wine.type_id;
            const wine_type = await axios.get(vivino_link_get_wine_type, { headers });
            //check and create country
            const country_id = await this.checkAndCreateCountry(item);
            //check and get alcohol
            let alcohol = 0;
            if (item.vintage.wine_facts.alcohol) {
                alcohol = item.vintage.wine_facts.alcohol;
            }
            let rating = item.vintage.statistics.ratings_average;
            let reviews = item.vintage.statistics.ratings_count;
            if (item.vintage.statistics.status === 'BelowThreshold') {
                rating = item.vintage.wine.statistics.ratings_average;
                reviews = item.vintage.wine.statistics.ratings_count;
            }
            let displayed_picture;
            if (item.vintage.image.variations.bottle_medium) {
                displayed_picture = item.vintage.image.variations.bottle_medium;
            } else {
                displayed_picture = item.vintage.image.variations.large;
            }
            let data = {
                vivino_id: item.vintage.id,
                vivino_wine_id: item.vintage.wine.id,
                vivino_year: item.vintage.year,
                vivino_image: item.vintage.image,
                rating: rating,
                reviews: reviews,
                displayed_rating: rating,
                displayed_reviews: reviews,
                vivino_wine_type: wine_type.data.selected_filters[0].items[0],
                displayed_vivino_wine_type: wine_type.data.selected_filters[0].items[0].name,
                vivino_wine_type_id: item.vintage.wine.type_id,
                vivino_winery: item.vintage.wine.winery,
                vivino_style: item.vintage.wine.style,
                vivino_region: item.vintage.wine.region,
                vivino_grapes: item.vintage.wine.grapes,
                displayed_name: item.vintage.name,
                crawl_from: 'VIVINO',
                country_id: country_id,
                alcohol: alcohol,
                vivino_url: body.link,
                slug: this.changeToSlug(item.vintage.name),
                displayed_picture: displayed_picture
            };
            //check products are crawled from vivino (hàm này để check trường hợp nhiều sản phẩm nhưng crawl 1 link vivino)
            await this.checkProductsAreCrawledFromVivino(item, body);
            //get reviews from vivino
            await this.getReviewsFromVivino(item.vintage.wine.id, item.vintage.year, body.id);
            //check food isset and create food
            await this.checkFoodsIssetAndCreate(item.vintage.wine.foods, body.id);
            //update product
            return await this.exec(this.model.update(data,
                {
                    where: {
                        id: body.id
                    }
                }));
        } catch (error) {
            console.log('', error);
            throw error;
        }
    }
    async getWineTypeFromVivino(id: string) {
        try {
            const url_vivino = 'https://www.vivino.com/api/explore/explore?wine_type_ids[]=' + id;
            const headers = {
                'User-Agent': 'PostmanRuntime/7.17.1',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Postman-Token': '6aee79bb-6dfe-404b-8e85-eaae722c36c3',
                'Host': 'www.vivino.com',
                'Accept-Encoding': 'gzip, deflate',
                'Cookie': '_ruby-web_session=TVdrWlllQ0RVczhTMGEwK3Y5NHpFYURVNnR5cXI0bklsWnRkdkxwRkkyVVVVUTdsanFkQWdZUDB6V1ZZRmsvUmFtS0xJR2FiNVZUOUd4SmJoQ3c0OHZ0STcrdVBYeGJvdnBvaWRGaUgyV2o4dHcveXdLNkFlVmIvNkQ3ekNYVkMrc25tZm9May9CVG0vek8vamlWYVNlQWFjVkhRdnRpbE9IbUhkQXpXc1lMUUtIZEhmWFk3WEJ5Q3dQZExVOHFULS1ZcGhSd295ZkpRaDdnUyt4WGxFaTRBPT0%3D--948b379d5474663a1fe6e3a2d5c1be092543ff4d',
                'Connection': 'keep-alive'
            };
            const res: any = await axios.get(url_vivino, { headers });
            return res.data.selected_filters[0].items[0];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getReviewsFromVivino(id: string, year: string, product_id: string) {
        try {
            //delete review
            await this.exec(Review.destroy({
                where: {
                    product_id: product_id
                }
            }));
            let results: any = [];
            const headers = {
                'User-Agent': 'PostmanRuntime/7.17.1',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Postman-Token': '6aee79bb-6dfe-404b-8e85-eaae722c36c3',
                'Host': 'www.vivino.com',
                'Accept-Encoding': 'gzip, deflate',
                'Cookie': '_ruby-web_session=TVdrWlllQ0RVczhTMGEwK3Y5NHpFYURVNnR5cXI0bklsWnRkdkxwRkkyVVVVUTdsanFkQWdZUDB6V1ZZRmsvUmFtS0xJR2FiNVZUOUd4SmJoQ3c0OHZ0STcrdVBYeGJvdnBvaWRGaUgyV2o4dHcveXdLNkFlVmIvNkQ3ekNYVkMrc25tZm9May9CVG0vek8vamlWYVNlQWFjVkhRdnRpbE9IbUhkQXpXc1lMUUtIZEhmWFk3WEJ5Q3dQZExVOHFULS1ZcGhSd295ZkpRaDdnUyt4WGxFaTRBPT0%3D--948b379d5474663a1fe6e3a2d5c1be092543ff4d',
                'Connection': 'keep-alive'
            };
            for (let i = 1; i < 5; i++) {
                const url_vivino = 'https://www.vivino.com/api/wines/' + id + '/reviews?year=' + year + '&page=' + i;
                let res: any = await axios.get(url_vivino, { headers });
                if (res.data.reviews.length > 0) {
                    results = results.concat(res.data.reviews);
                }
            }
            await this.createReview(results, product_id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getFoodsGrapesOfProductFromVivino(id: string) {
        try {
            const url_vivino = 'https://www.vivino.com/api/vintages/' + id + '/vintage_page_information';
            const headers = {
                'User-Agent': 'PostmanRuntime/7.17.1',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Postman-Token': '6aee79bb-6dfe-404b-8e85-eaae722c36c3',
                'Host': 'www.vivino.com',
                'Accept-Encoding': 'gzip, deflate',
                'Cookie': '_ruby-web_session=TVdrWlllQ0RVczhTMGEwK3Y5NHpFYURVNnR5cXI0bklsWnRkdkxwRkkyVVVVUTdsanFkQWdZUDB6V1ZZRmsvUmFtS0xJR2FiNVZUOUd4SmJoQ3c0OHZ0STcrdVBYeGJvdnBvaWRGaUgyV2o4dHcveXdLNkFlVmIvNkQ3ekNYVkMrc25tZm9May9CVG0vek8vamlWYVNlQWFjVkhRdnRpbE9IbUhkQXpXc1lMUUtIZEhmWFk3WEJ5Q3dQZExVOHFULS1ZcGhSd295ZkpRaDdnUyt4WGxFaTRBPT0%3D--948b379d5474663a1fe6e3a2d5c1be092543ff4d',
                'Connection': 'keep-alive'
            };
            const res: any = await axios.get(url_vivino, { headers });
            return res.data.vintage_page_information.vintage.wine;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async checkFoodsIssetAndCreate(vivino_foods: any, product_id: string) {
        const transaction = await sequelize.transaction();
        try {
            await this.exec(FoodProduct.destroy({
                where: {
                    product_id: product_id
                }
            }));
            if (vivino_foods && vivino_foods.length > 0) {
                let food_contains = [];
                for (let i = 0; i < vivino_foods.length; i++) {
                    const item = vivino_foods[i];
                    let food = await this.exec(Food.findOne({
                        where: {
                            name: item.name,
                            vivino_id: item.id
                        }
                    }));
                    if (!food) {
                        const data: any = {
                            name: item.name,
                            vivino_id: item.id
                        }
                        food = await this.exec(Food.create(data));
                    }
                    let food_product = await this.exec(FoodProduct.findOne({
                        where: {
                            product_id: product_id,
                            food_id: food.id
                        }
                    }));
                    if (!food_product) {
                        const body: any = {
                            product_id: product_id,
                            food_id: food.id
                        }
                        await this.exec(FoodProduct.create(body, { transaction }))
                    }
                    food_contains.push(food.id);
                }
                await this.exec(this.model.update(
                    {
                        food_contains: food_contains
                    },
                    {
                        where: {
                            id: product_id
                        }
                    }
                ));
            }
            transaction.commit();
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
    async createReview(reviews: any, product_id: string) {
        const transaction = await sequelize.transaction();
        try {
            if (reviews.length > 0) {
                for (let i = 0; i < reviews.length; i++) {
                    if (i < 10) {
                        const review = reviews[i];
                        const content_vn = await this.translate(review.note);
                        const data: any = {
                            vivino_id: review.id,
                            content: review.note,
                            content_vn: content_vn,
                            language: review.language,
                            user: review.user,
                            rating: review.rating,
                            vivino_created_at: review.created_at,
                            product_id: product_id
                        }
                        await this.exec(Review.create(data, { transaction }));
                    }
                }
            }
            transaction.commit();
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
    async checkAndCreateCountry(item: any) {
        try {
            let country_name = null;
            let country_code = null;
            let country;
            let country_id = null;
            if (item.vintage.wine.region !== null) {
                country_name = item.vintage.wine.region.country.name;
                country_code = item.vintage.wine.region.country.code;
            }
            if (country_name !== null && country_code !== null) {
                country = await this.exec(Country.findOne({
                    where: {
                        name: country_name,
                        code: country_code
                    }
                }));
                if (country) {
                    country_id = country.id;
                } else {
                    const body: any = {
                        name: country_name,
                        code: country_code
                    }
                    country = await this.exec(Country.create(body));
                    country_id = country.id;
                }
            }
            return country_id;
        } catch (error) {
            throw error;
        }
    }
    async translate(text: string) {
        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        const target = 'vi';
        let [translations]: any = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        let result = '';
        translations.forEach((translation: any, i: any) => {
            result += translation;
        });
        return result;
    }
    async checkProductsAreCrawledFromVivino(item: any, body: any) {
        const transaction = await sequelize.transaction();
        try {
            //get product is crawled by the same vivino link
            let product_isset = await this.exec(this.model.findOne({
                where: {
                    vivino_id: item.vintage.id,
                    vivino_wine_id: item.vintage.wine.id,
                    maybe_duplicate: false
                },
                include: [
                    {
                        association: 'shops_of_product'
                    }
                ]
            }));
            if (product_isset) {
                //get list shop of this product
                const list_shops_of_this_product = await this.exec(ProductShop.findAndCountAll({
                    where: {
                        product_id: body.id
                    }
                }));
                const array_shop_ids_of_this_product = list_shops_of_this_product.rows.map((e: any) => e.shop_id);
                let list_shops_of_product_isset: any = product_isset.shops_of_product;
                let array_shop_ids_of_product_isset: any = list_shops_of_product_isset.map((e: any) => e.shop_id);
                //check shop_id duplicate
                const array_shop_ids_duplicate = array_shop_ids_of_this_product.filter((e: any) => {
                    return array_shop_ids_of_product_isset.indexOf(e) > -1;
                });
                if (array_shop_ids_duplicate.length > 0) {
                    throw errorService.database.queryFail('This link has been used for one of the products in the same shop');
                } else {
                    //update field maybe_duplicate for product
                    await this.exec(Product.update(
                        {
                            maybe_duplicate: true
                        },
                        {
                            where: {
                                id: product_isset.id
                            },
                            transaction
                        }
                    ));
                    //delete tbl_product_shop old and create new product_shop
                    if (array_shop_ids_of_product_isset.length > 0) {
                        await this.exec(ProductShop.destroy({
                            where: {
                                shop_id: { $in: array_shop_ids_of_product_isset },
                                product_id: product_isset.id
                            },
                            transaction
                        }));
                    }
                    for (let j = 0; j < list_shops_of_product_isset.length; j++) {
                        const product_shop_isset = await this.exec(ProductShop.findOne({
                            where: {
                                product_id: body.id,
                                shop_id: list_shops_of_product_isset[j].shop_id
                            }
                        }));
                        if (!product_shop_isset) {
                            const data: any = {
                                product_id: body.id,
                                shop_id: list_shops_of_product_isset[j].shop_id,
                                price: list_shops_of_product_isset[j].price,
                                name_in_the_shop: list_shops_of_product_isset[j].name_in_the_shop
                            }
                            await this.exec(ProductShop.create(data, { transaction }))
                        }
                    }
                }
            }
            transaction.commit();
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
    async deleteVivinoLink(id: any) {
        const transaction = await sequelize.transaction();
        try {
            const data: any = {
                //country_id of Vietnam
                country_id: 'f05347e0-ea4a-11e9-92a6-4b48ef6fdfab',
                crawl_from: 'NOW',
                displayed_name: null,
                vivino_id: '0',
                vivino_image: null,
                vivino_wine_id: '0',
                vivino_year: '0',
                vivino_winery: null,
                vivino_style: null,
                vivino_region: null,
                vivino_wine_type: null,
                displayed_vivino_winery: null,
                displayed_vivino_style: null,
                displayed_vivino_region: null,
                displayed_vivino_wine_type: null,
                displayed_vivino_food: null,
                displayed_vivino_grape: null,
                vivino_reviews: null,
                vivino_foods: null,
                vivino_grapes: null,
                vivino_wine_type_id: '0',
                featured: 'NO',
                alcohol: 0,
                vivino_url: null,
                slug: null,
                rating: 0,
                reviews: 0,
                displayed_picture: null
            };
            await this.exec(this.model.update(
                data,
                {
                    where: {
                        id: id
                    },
                    transaction
                }
            ));
            await this.exec(FoodProduct.destroy({
                where: {
                    product_id: id
                },
                transaction
            }));
            await this.exec(Review.destroy({
                where: {
                    product_id: id
                },
                transaction
            }));
            transaction.commit();
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
    changeToSlug(str: any) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        str = str.replace(/đ/gi, 'd');
        str = str.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        str = str.replace(/ /gi, " - ");
        str = str.replace(/\-\-\-\-\-/gi, '-');
        str = str.replace(/\-\-\-\-/gi, '-');
        str = str.replace(/\-\-\-/gi, '-');
        str = str.replace(/\-\-/gi, '-');
        str = '@' + str + '@';
        str = str.replace(/\@\-|\-\@|\@/gi, '');
        str = str.replace(/\s/g, '');
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
    async checkProductsHaveBeenDeletedFromNow(items: any) {
        const transaction = await sequelize.transaction();
        try {
            const list_products = await this.exec(this.model.findAndCount({
                attributes: ['id', 'name']
            }));
            let list_products_have_been_deleted_from_now: any;
            let list_ids_product_have_been_deleted_from_now: any;
            if (list_products.count > 0) {
                list_products_have_been_deleted_from_now = _.xorBy(list_products.rows, items, 'name');
            }
            if (list_products_have_been_deleted_from_now.length > 0) {
                list_ids_product_have_been_deleted_from_now = list_products_have_been_deleted_from_now.map((e: any) => e.id);
            }
            if (list_ids_product_have_been_deleted_from_now.length > 0) {
                await this.exec(this.model.update(
                    {
                        not_in_use: true,
                        editable: true
                    },
                    {
                        where: {
                            id: { $in: list_ids_product_have_been_deleted_from_now }
                        },
                        transaction
                    }
                ));
            }
            transaction.commit();
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
}