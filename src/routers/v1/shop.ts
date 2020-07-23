import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { shopController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class ShopRouter extends CrudRouter<typeof shopController> {
    constructor() {
        super(shopController)

    }

    customRouting() {
        this.router.put('/update/:id', this.nowMiddlewares(), this.route(this.update_shop))
        this.router.post('/create', this.nowMiddlewares(), this.route(this.create_shop))
        this.router.delete('/delete/:id', this.nowMiddlewares(), this.route(this.delete_shop))
        this.router.post('/check_isset_and_create', this.nowMiddlewares(), this.route(this.checkIssetAndCreate))
        this.router.post('/delete_shops_have_been_deleted_from_now', this.nowMiddlewares(), this.route(this.deleteShopHaveBeenDeletedFromNow))
        this.router.get('/schedule_update', this.getListMiddlewares(), this.route(this.scheduleUpdate))
    }
    async scheduleUpdate(req: Request, res: Response) {
        const result = await this.controller.scheduleUpdate(req.queryInfo)
        this.onSuccessAsList(res, result, undefined, req.queryInfo)
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
    async deleteShopHaveBeenDeletedFromNow(req: Request, res: Response) {
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
        const result = await this.controller.deleteShopHaveBeenDeletedFromNow(req.body)
        this.onSuccess(res, result)
    }
    async delete_shop(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.delete({
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    async create_shop(req: Request, res: Response) {
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    async update_shop(req: Request, res: Response) {
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
}