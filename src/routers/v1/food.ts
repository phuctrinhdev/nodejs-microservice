import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { foodController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class FoodRouter extends CrudRouter<typeof foodController> {
    constructor() {
        super(foodController)
    }

    customRouting() {
        this.router.post('/check_isset_and_create/:product_id', this.createMiddlewares(), this.route(this.checkIssetAndCreate))
    }
    async checkIssetAndCreate(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object'
                    }
                }
            },
            required: ['items']
        });
        const { product_id } = req.params;
        const result = await this.controller.checkIssetAndCreate(req.body, product_id);
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