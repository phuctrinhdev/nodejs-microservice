import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware, checkAuthMiddleware, adminTypeMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class userRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }

    customRouting() {
        //this.router.post('/check_username', this.route(this.checkUsername))
       
    }
    async getList(req: Request, res: Response) {
        let objects = await this.controller.getList(req.queryInfo)
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        const resultNotPass = Object.assign({
            objects
        }, undefined)
        const rowJson = resultNotPass.objects.rows;
        for (let i = 0; i < rowJson.length; i++) {
            const jsonObject = rowJson[i].dataValues;
            delete jsonObject["password"]
            resultNotPass.objects.rows[i].dataValues = jsonObject;
        }
        const page = _.floor(req.queryInfo.offset / req.queryInfo.limit) + 1
        res.json({
            code: 200,
            results: resultNotPass,
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': req.queryInfo.limit
            }
        })
    }
    async getItem(req: Request, res: Response) {
        const { id } = req.params
        req.queryInfo.filter.id = id
        let object = await this.controller.getItem(req.queryInfo)
        object = object || {}
        const resultNotPass = Object.assign({
            object
        }, undefined)
        const rowJson = resultNotPass.object;

        const jsonObject = rowJson.dataValues;
        delete jsonObject["password"]
        resultNotPass.object.dataValues = jsonObject;

        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: resultNotPass
            })
        }
    }


    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run(), checkAuthMiddleware.run()]
    }
    countUserWithLoginTypeMiddlewares(): any[] {
        return [authInfoMiddleware.run(), checkAuthMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminTypeMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminTypeMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminTypeMiddleware.run()]
    }
    getListMyPurchaseMiddlewares(): any[] {
        return [authInfoMiddleware.run(), checkAuthMiddleware.run(),queryMiddleware.run()]
    }
}