import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    userController,
} from '@/controllers';
import {
    authInfoMiddleware,
    adminTypeMiddleware,
    superAdminTypeMiddleware,
    queryMiddleware
} from '@/middlewares'
import * as moment from 'moment'
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        // this.router.post('/dashboard', this.statisticMiddlewares(), this.route(this.statisticDashboard));
        // this.router.post('/statistic_pack', this.statisticMiddlewares(), this.route(this.statisticPack));
        // this.router.post('/statistic_video', this.statisticMiddlewares(), this.route(this.statisticVideo));

        // this.router.post('/summary', this.statisticMiddlewares(), this.route(this.statisticSummary));

    }
    // async statisticSummary(req: Request, res: Response) {
    //     const result = await userController.statisticSummary(req.body, req.queryInfo);
    //     this.onSuccess(res, result);
    // }
    // async statisticVideo(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'SELECT',
    //                     'DAY'
    //                 ]
    //             },
    //             select: {
    //                 enum: [
    //                     'TODAY',
    //                     'LAST_7_DAY',
    //                     'LAST_30_DAY'
    //                 ]
    //             },
    //             from_date: {
    //                 type: 'string'
    //             },
    //             to_date: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await videoController.statisticVideo(req.body, req.queryInfo);
    //     this.onSuccessAsList(res, result, undefined, req.queryInfo)
    // }
    // async statisticPack(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'SELECT',
    //                     'DAY'
    //                 ]
    //             },
    //             select: {
    //                 enum: [
    //                     'TODAY',
    //                     'LAST_7_DAY',
    //                     'LAST_30_DAY'
    //                 ]
    //             },
    //             from_date: {
    //                 type: 'string'
    //             },
    //             to_date: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await packController.statisticPack(req.body, req.queryInfo);
    //     this.onSuccessAsList(res, result, undefined, req.queryInfo)
    // }
    // async statisticDashboard(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'YEAR',
    //                     'MONTH'
    //                 ]
    //             },
    //             month: {
    //                 type: 'string'
    //             },
    //             year: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await packController.statisticDashboard(req.body, req.queryInfo);
    //     this.onSuccess(res, result);
    // }


    statisticMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminTypeMiddleware.run(), queryMiddleware.run()]
    }

} 