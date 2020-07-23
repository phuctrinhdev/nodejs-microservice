import { CrudRouter } from '../crud'
import { Request, Response, BaseRouter } from '../base'
import { queryMiddleware, authInfoMiddleware, blockMiddleware } from '@/middlewares'
import * as multer from 'multer'
const sharp = require('sharp');
const probe = require('probe-image-size');
import * as fs from 'fs'
import * as express from 'express'
import { config } from '@/config'
import * as _ from 'lodash'
import {
    errorService,
} from '@/services'
// const IMAGE_URL_SERVER = `${config.server.protocol}://${config.server.host}:${config.server.port}` + '/api/v1/image/get/'
const IMAGE_URL_SERVER_FOR_PRODUCTION = `https://${config.server.host}:8002` + '/api/v1/image/get/'
const TYPE_IMAGE = '.png'
const FILE_IMAGE_PATH = 'image/'
const KEY_CLOUDIMAGE = 'ce8391bac'
export default class ImageRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        const storage = multer.diskStorage({
            destination: function (req: Request, file: any, cb: any) {
                cb(null, FILE_IMAGE_PATH)
            },
            filename: function (req: Request, file: any, cb: any) {
                cb(null, file.fieldname + '-' + Date.now() + TYPE_IMAGE)
            }
        })
        const upload = multer({ storage: storage })
        this.router.get('/get/:filename', this.route(this.getImage));
        this.router.get('/cloudimg/:operation/:size/:filter/:filename', this.route(this.cloudimg));
        this.router.post('/upload', this.updateImageMiddlewares(), upload.single("image"), this.route(this.updateAvatar))
    }

    async updateAvatar(req: Request, res: Response) {
        const fileUrl = IMAGE_URL_SERVER_FOR_PRODUCTION;
        console.log('bambi start resize image');
        const filename = 'resized-' + req.file.filename;
        await this.resizeImage(req.file.path, FILE_IMAGE_PATH + filename);
     
        const url = fileUrl + filename
        if (req.tokenInfo.payload.user_id !== undefined) {
            req.body.user_id = req.tokenInfo.payload.user_id
            req.body.file_url = url
        }
        this.onSuccess(res, { url, filename })
    }

    resizeImage(originalFilePath: string, newFilePath: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const input = require('fs').createReadStream(originalFilePath);
            probe(input).then((result: any) => {
              console.log('bambi tui check option cua image ne', result);
            
              const maxSize = 400;
                let newWidth = maxSize;
                let newHeight = maxSize;
                if (result.width > result.height) {
                    if (result.width < newWidth) {
                        newWidth = result.width;
                    }
                    newHeight = Math.round(newWidth * result.height / result.width);
                } else {
                    if (result.height < newHeight) {
                        newHeight = result.width;
                    }
                    newWidth = Math.round(newHeight * result.width / result.height);
                }

                sharp(originalFilePath).resize(newWidth, newHeight).toFile(newFilePath, (err: any) => {
                    if (err) {
                        console.error('resize image failed', err)
                    }
                    console.error('resize image successfully')
                    resolve();
                });

              // terminate input, depends on stream type,
              // this example is for fs streams only.
              input.destroy();
            });
        });
    }
    async cloudimg(req: Request, res: Response) {
        const { operation, size, filter, filename } = req.params
        const imageUrl = IMAGE_URL_SERVER_FOR_PRODUCTION;
        const UrlImage = "https://" + KEY_CLOUDIMAGE + ".cloudimg.io/" + operation + "/" + size + "/" + filter + "/" + imageUrl + filename;
        res.redirect(UrlImage);
    }
    async getImage(req: Request, res: Response) {
        const { filename } = req.params
        // console.log('!!! about to check file exist');
        fs.exists(FILE_IMAGE_PATH + filename, function (exists) {
            // console.log('!!! did check file exist', exists);
            if (exists) {
                fs.readFile(FILE_IMAGE_PATH + filename, function (err, data) {
                    if (err) {
                        console.log('!!! error reading file');
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.write(`{
                            "code": 500,
                            "type": "database_exception_query_fail",
                            "message": "Image does not exist"
                        }`);
                        res.end();
                    }
                    else {
                        // console.log('!!! read a file successfully');
                        res.writeHead(200, { 'Content-Type': 'image/png' });
                        res.end(data);
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.write(`{
                    "code": 500,
                    "type": "database_exception_query_fail",
                    "message": "Image does not exist"
                }`);
                res.end();
            }
        });
    }

    updateImageMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
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
        // return [blockMiddleware.run()]
        return []
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
}