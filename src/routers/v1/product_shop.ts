import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { productShopController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class ProductShopRouter extends CrudRouter<typeof productShopController> {
    constructor() {
        super(productShopController)

    }

    customRouting() {
        this.router.post('/change_all_not_in_use', this.updateMiddlewares(), this.route(this.changeAllNotInUse))
    }
    async changeAllNotInUse(req: Request, res: Response) {
        const result = await this.controller.changeAllNotInUse(req.body);
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