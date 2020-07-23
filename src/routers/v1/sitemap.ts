import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { siteMapController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, nowMiddleware } from '@/middlewares'
import * as _ from 'lodash'
var path = require('path');
export default class SiteMapRouter extends CrudRouter<typeof siteMapController> {
    constructor() {
        super(siteMapController)

    }
    customRouting() {
        this.router.get('/create', this.getListMiddlewares(), this.route(this.createSiteMap))
        this.router.get('/', this.getListMiddlewares(), this.route(this.getSiteMap))
    }
    async getSiteMap(req: Request, res: Response) {
        var options = {
            root: path.join(''),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true,
                'Content-Type': 'application/xml'
            }
        }

        var fileName = 'sitemap.xml';
        res.sendFile(fileName, options, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Sent:', fileName)
            }
        })
    }
    async createSiteMap(req: Request, res: Response) {
        const result = await this.controller.createSiteMap()
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