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
const IMAGE_URL_SERVER_FOR_PRODUCTION = `https://${config.server.host}:8002` + '/api/v1/file/get/'
const FILE_IMAGE_PATH = 'file/'
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
                const parts = file.originalname.split('.');
                const type = parts[parts.length - 1];
                cb(null, file.fieldname + '-' + Date.now() + '.' + type)
            }
        })
        const upload = multer({ storage: storage })
        this.router.get('/get/:filename', this.route(this.getImage));
        this.router.post('/upload', this.updateImageMiddlewares(), upload.single("file"), this.route(this.updateFile))
    }

    async updateFile(req: Request, res: Response) {
        const fileUrl = IMAGE_URL_SERVER_FOR_PRODUCTION;
        const filename = req.file.filename;
        console.log("@#$%^$#", req.file)
        const url = fileUrl + filename
        if (req.tokenInfo.payload.user_id !== undefined) {
            req.body.user_id = req.tokenInfo.payload.user_id
            req.body.file_url = url
        }
        this.onSuccess(res, { url, filename })
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
                            "message": "error reading file"
                        }`);
                        res.end();
                    }
                    else {
                        // console.log('!!! read a file successfully');
                        // res.writeHead(200, { 'Content-Type': 'image/png' });
                        // res.end(data);
                        res.download(FILE_IMAGE_PATH + filename)
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.write(`{
                    "code": 500,
                    "type": "database_exception_query_fail",
                    "message": "file does not exist"
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