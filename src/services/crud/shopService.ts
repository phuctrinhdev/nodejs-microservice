import { CrudService, ICrudOption } from '../crudService.pg'
import { Shop, ProductShop, Product } from '@/models/tables'

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
export class ShopService extends CrudService<typeof Shop> {
    constructor() {
        super(Shop)
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
                        link: items[i].link,
                        address: items[i].address
                    }
                }));
                if (!item) {
                    item = await this.exec(
                        this.model.create(items[i], { transaction }))
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
    async deleteShopHaveBeenDeletedFromNow(body: any) {
        const {
            items
        } = body;
        const transaction = await sequelize.transaction();
        try {
            for (let i = 0; i < items.length; i++) {
                await this.exec(this.model.update(
                    {
                        not_in_use: true
                    }, {
                    where: {
                        id: items[i].id
                    }
                }
                ));
                await this.exec(ProductShop.update(
                    {
                        not_in_use: true
                    }, {
                    where: {
                        shop_id: items[i].id
                    }
                }
                ));
                let list_products_of_shop = await this.exec(ProductShop.findAndCount({
                    where: {
                        shop_id: items[i].id
                    }
                }));
                let array_product_ids: any;
                if (list_products_of_shop.count > 0) {
                    array_product_ids = list_products_of_shop.rows.map((e: any) => { return e.product_id });
                }
                if (array_product_ids.length > 0) {
                    await this.exec(Product.update(
                        {
                            not_in_use: true
                        },
                        {
                            where: {
                                product_id: { $in: array_product_ids }
                            }
                        }
                    ))
                }
            }
            transaction.commit();
            return true;
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }

    async scheduleUpdate(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        option.limit = 99999999;
        const products = await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
        if(products.rows.length > 0){
            for (let i = 0; i < products.rows.length; i++) {
                const element = products.rows[i];
                await this.exec(this.model.update(
                    {
                        schedule_update: parseInt(element.schedule_update) + 1
                    },
                    {
                        where: {
                            id: element.id
                        }
                    }
                ))
            }
        }
        return products;
    }
}