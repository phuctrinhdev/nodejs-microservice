import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { translateController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class TranslateRouter extends CrudRouter<typeof translateController> {
    constructor() {
        super(translateController)

    }
    customRouting() {
        this.router.get('/get_list_object',this.getListMiddlewares(), this.route(this.getListOverRide))
    }
    async getListOverRide(req: Request, res: Response) {
        req.queryInfo.search = req.query.search;
        const result = await this.controller.getListOverRide(req.queryInfo)
        this.onSuccessAsList(res, result, undefined, req.queryInfo)
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