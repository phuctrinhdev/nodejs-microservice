import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { employeeController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, superAdminTypeMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class EmployeeRouter extends CrudRouter<typeof employeeController> {
    constructor() {
        super(employeeController)

    }

    customRouting() {
        this.router.post('/check_username', this.route(this.checkUsername))
    }
    async create(req: Request, res: Response) {
        req.body.role = req.tokenInfo.payload.role
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    async update(req: Request, res: Response) {
        req.body.employee_id = req.tokenInfo.payload.employee_id
        req.body.role = req.tokenInfo.payload.role
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
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

    async checkUsername(req: Request, res: Response) {
        const result = await this.controller.checkUsername(req.body)
        if (result['duplicate'] == true) {
            res.status(201).json({
                code: 201,
                results: { object: { message: result['resultOfCheckUser'] } }
            })
        } else {
            this.onSuccess(res, result)
        }
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
        return [authInfoMiddleware.run(), superAdminTypeMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [authInfoMiddleware.run(), superAdminTypeMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run(), superAdminTypeMiddleware.run()]
    }
}