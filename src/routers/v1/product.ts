import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { productController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class ProductRouter extends CrudRouter<typeof productController> {
    constructor() {
        super(productController)

    }

    customRouting() {
        this.router.post('/update/:id', this.nowMiddlewares(), this.route(this.update_product))
        this.router.post('/create', this.nowMiddlewares(), this.route(this.create_product))
        this.router.delete('/delete/:id', this.nowMiddlewares(), this.route(this.delete_product))
        this.router.post('/check_isset_and_create', this.nowMiddlewares(), this.route(this.checkIssetAndCreate))
        this.router.post('/check_isset_and_update_price', this.nowMiddlewares(), this.route(this.checkIssetAndUpdatePrice))
        this.router.post('/check_products_have_been_deleted_from_now', this.nowMiddlewares(), this.route(this.checkProductsHaveBeenDeletedFromNow))
        this.router.post('/crawl_data_product_detail_page_from_vivino', this.createMiddlewares(), this.route(this.crawlDataProductPageFromVivino))
        this.router.get('/get_wine_type_from_vivino/:id', this.createMiddlewares(), this.route(this.getWineTypeFromVivino))
        this.router.get('/get_reviews_from_vivino/:id/:year/:product_id', this.createMiddlewares(), this.route(this.getReviewsFromVivino))
        this.router.get('/get_foods_grapes_of_product_from_vivino/:id', this.createMiddlewares(), this.route(this.getFoodsGrapesOfProductFromVivino))
        this.router.get('/statistic', this.getListMiddlewares(), this.route(this.statistic))
        this.router.get('/get_item_with_slug/:slug',this.getItemMiddlewares(), this.route(this.getItemWithSlug))
        this.router.get('/delete_vivino_link/:id',this.updateMiddlewares(), this.route(this.deleteVivinoLink))
        this.router.post('/search',this.getListMiddlewares(), this.route(this.search))
    }
    async search(req: Request, res: Response) {
        if(req.body.filter){
            req.queryInfo.filter = req.body.filter
        }
        if(req.body.order){
            req.queryInfo.order = req.body.order
        }
        if(req.body.attributes){
            req.queryInfo.attributes = req.body.attributes
        }
        if(req.body.include){
            req.queryInfo.include = req.body.include
        }
        const result = await this.controller.search(req.queryInfo);
        this.onSuccessAsList(res, result, undefined, req.queryInfo)
    }
    async getItemWithSlug(req: Request, res: Response) {
        const { slug } = req.params
        req.queryInfo.filter.slug = slug
        const result = await this.controller.getItem(req.queryInfo)
        this.onSuccess(res, result)
    }
    async deleteVivinoLink(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.deleteVivinoLink(id)
        this.onSuccess(res, result)
    }
    async statistic(req: Request, res: Response) {
        const result = await this.controller.statistic(req.params);
        this.onSuccess(res, result)
    }
    async checkIssetAndCreate(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object'
                    },
                    minItems: 1
                }
            }
        })
        const result = await this.controller.checkIssetAndCreate(req.body)
        this.onSuccess(res, result)
    }
    async checkIssetAndUpdatePrice(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object'
                    },
                    minItems: 1
                }
            }
        })
        const result = await this.controller.checkIssetAndUpdatePrice(req.body)
        this.onSuccess(res, result)
    }
    async checkProductsHaveBeenDeletedFromNow(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object'
                    },
                    minItems: 1
                }
            }
        })
        const result = await this.controller.checkProductsHaveBeenDeletedFromNow(req.body)
        this.onSuccess(res, result)
    }
    async getWineTypeFromVivino(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.getWineTypeFromVivino(id);
        this.onSuccess(res, result)
    }
    async getReviewsFromVivino(req: Request, res: Response) {
        const { id, year, product_id } = req.params
        const result = await this.controller.getReviewsFromVivino(id, year, product_id);
        this.onSuccess(res, result)
    }
    async getFoodsGrapesOfProductFromVivino(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.getFoodsGrapesOfProductFromVivino(id);
        this.onSuccess(res, result)
    }
    async crawlDataProductPageFromVivino(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                link: {
                    type: 'string'
                },
                id: {
                    type: 'string'
                },
            },
            required: ['link', 'id']
        });
        const result = await this.controller.crawlDataProductPageFromVivino(req.body)
        this.onSuccess(res, result)
    }
    async delete_product(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.delete({
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    async create_product(req: Request, res: Response) {
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    async update_product(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    nowMiddlewares(): any[] {
        return [nowMiddleware.run()]
    }
    doNotNeedMiddlewares(): any[] {
        return;
    }
}