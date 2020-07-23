import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { countryController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class CountryRouter extends CrudRouter<typeof countryController> {
    constructor() {
        super(countryController)

    }

    customRouting() {
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