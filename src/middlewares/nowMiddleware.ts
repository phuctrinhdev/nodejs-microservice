import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
const HEADERS = 'authorization'
export class NowMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {

    

    if (req.headers.referer === 'server.hitek.com.vn') {
      //  const bearerHeader = req.headers['Host'].toString()
      // const bearer = bearerHeader.split(' ');
      // const bearerToken = bearer[1];
      // const result = await tokenService.decodeToken(bearerToken);
      // req.tokenInfo = result;
      console.log("@$#% ", req.headers.referer)
      next()
    } else {
      throw errorService.auth.unauthorized();
    }
  }
}