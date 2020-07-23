import * as express from 'express'
import * as _ from 'lodash'
import { BaseRouter, Request, Response } from './base'
import { errorService } from '@/services'
import { CrudController } from '@/controllers'
import {
    authInfoMiddleware,
    queryMiddleware,
} from '@/middlewares'
export class CrudRouter<T extends CrudController<any>> extends BaseRouter {
    constructor(controller: T) {
        super()
        this.controller = controller
        this.router = express.Router();
        this.customRouting();
        this.defaultRouting();
    }
    controller: T
    router: express.Router
    defaultRouting() {
        this.router.get('/',this.getListMiddlewares(), this.route(this.getList))
        this.router.get('/:id',this.getItemMiddlewares(), this.route(this.getItem))
        this.router.post('/', this.createMiddlewares(), this.route(this.create))
        this.router.put('/:id', this.updateMiddlewares(), this.route(this.update))
        this.router.delete('/:id', this.deleteMiddlewares(), this.route(this.delete))
        this.router.delete('/', this.deleteAllMiddlewares(), this.route(this.deleteAll))
    }
    customRouting() {

    }
    checkGetMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    getListMiddlewares(): any[] {
        return [
            
            queryMiddleware.run()
        ]
    }
    async getList(req: Request, res: Response) {
        const result = await this.controller.getList(req.queryInfo)
        this.onSuccessAsList(res, result, undefined, req.queryInfo)
    }
    getItemMiddlewares(): any[] {
        return [
            
            queryMiddleware.run()
        ]
    }
    async getItem(req: Request, res: Response) {
        const { id } = req.params
        req.queryInfo.filter.id = id
        const result = await this.controller.getItem(req.queryInfo)
        this.onSuccess(res, result)
    }
    createMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async create(req: Request, res: Response) {
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    updateMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    deleteMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.delete({
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    deleteAllMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async deleteAll(req: Request, res: Response) {
        if (_.has(req.query, "items")) {
            req.query.items = JSON.parse(req.query.items) || {}
        }
        await this.validateJSON(req.query, {
            type: "object",
            properties: {
                items: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: "string" }
                }
            },
            required: ['items'],
            additionalProperties: false
        })
        const { items } = req.query
        const result = await this.controller.deleteAll({
            filter: { id: { $in: items } }
        })
        this.onSuccess(res, result)
    }
}
