import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
const HEADERS = 'authorization'
export class SuperAdminTypeMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {
    if (req.tokenInfo) {
      if (req.tokenInfo.payload.role === 'SUPERADMIN')
        next()
      else throw errorService.auth.permissionDeny();
    }
    else throw errorService.auth.badToken();
  }
}