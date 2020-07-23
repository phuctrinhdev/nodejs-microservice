import { CrudRouter } from '../crud'
import { errorService, tokenService, } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    employeeController,
    userController
    //userController
} from '@/controllers';
import {
    authInfoMiddleware
} from '@/middlewares'
const nodemailer = require('nodemailer');
// const URL_PAGE = "https://telepro-forgot-password.firebaseapp.com/change-password.html?token="
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        // this.router.post('/login', this.route(this.login))
        // this.router.post('/register/', this.route(this.registerUser));
        this.router.post('/employee_login', this.route(this.employeeLogin));
        // this.router.post('/login_with_phone_number', this.route(this.loginWithPhoneNumber))
        // this.router.post('/login_with_facebook', this.route(this.loginWithFacebook))
        // this.router.post('/login_with_facebook_account_kit', this.route(this.checkLoginWithFacebookAccountKit))
        // this.router.post('/login_with_google', this.route(this.loginWithGoogle))
        // this.router.post('/forget_password', this.route(this.forgetPassword))
        // this.router.post('/get_password', this.route(this.getPassword))
        // this.router.post('/reset_password', this.route(this.resetPassword))
        // this.router.post('/register_with_phone_number/', this.route(this.registerUserWithPhoneNumber));
        this.router.post('/login_with_facebook', this.route(this.loginWithFacebook))
        this.router.post('/login_with_google', this.route(this.loginWithGoogle))

    }
    async loginWithFacebook(req: Request, res: Response) {
        const dataObtained = await userController.checkLoginWithFacebook(req.body)
        if (dataObtained.dataValues) {
            dataObtained.dataValues.role = "USER";
        }
        const token = await tokenService.getUserToken(dataObtained.id)
        this.onSuccess(res, dataObtained, { token, isNewUser: dataObtained.isNewUser })
    }
    async loginWithGoogle(req: Request, res: Response) {
        const dataObtained = await userController.checkLoginWithGoogle(req.body)
        if (dataObtained.dataValues) {
            dataObtained.dataValues.role = "USER";
        }
        const token = await tokenService.getUserToken(dataObtained.id)
        this.onSuccess(res, dataObtained, { token, isNewUser: dataObtained.isNewUser })
    }
    async employeeLogin(req: Request, res: Response) {
        const dataObtained = await employeeController.checkLogin(req.body)
        const token = await tokenService.getEmployeeToken(dataObtained.id)
        this.onSuccess(res, dataObtained, { token })

    }
    
} 