import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
const HEADERS = 'authorization'
export class CheckAuthMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {
    if (req.tokenInfo) {
      if (req.tokenInfo.payload.role === 'OPERATOR'
        || req.tokenInfo.payload.role === 'ADMIN'
        || req.tokenInfo.payload.role === 'SUPERADMIN') {
        next()
      } else {
        console.log("user  ne ", req.params.id)
        console.log("user tokenInfo ne ", req.tokenInfo.payload.user_id)
        if (req.tokenInfo.payload.user_id === req.params.id)
          next()
        else throw errorService.auth.permissionDeny();
      }

    }
    else throw errorService.auth.badToken();
  }
}