import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { tagController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class TagRouter extends CrudRouter<typeof tagController> {
    constructor() {
        super(tagController)

    }

    customRouting() {
       
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