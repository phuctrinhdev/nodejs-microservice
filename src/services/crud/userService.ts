import { CrudService, ICrudOption } from '../crudService.pg'
import { User } from '@/models/tables'

import {
    sequelize
} from '@/models'
import axios from 'axios';
import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
import { config } from '@/config'
export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User)
    }

    async checkLoginWithFacebook(params: any, option?: ICrudOption) {
        const imei = params.imei;
        const secondInAMonth = 2592000;
        let dataFromFacebook: any = {};
        try {
            const response = await axios.get(`https://graph.facebook.com/me?access_token=${params.facebookToken}`);
            const data = response.data;
            dataFromFacebook = data;
        } catch (error) {
            console.log('Authenticate facebook failed', error);
        }

        let result = await this.exec(this.model.findOne({
            where: {
                login_type: 'FACEBOOK',
                username: dataFromFacebook.id
            }
        }))
        if (!result) {
            const body: any = {
                login_type: 'FACEBOOK',
                username: dataFromFacebook.id,
                fullname: dataFromFacebook.name,
            }
            result = await this.exec(this.model.create(body, this.applyCreateOptions(option)))
            result.isNewUser = true;
            //this.createPackUser(result.id)
        }

        return result;
    }
    async checkLoginWithGoogle(params: any, option?: ICrudOption) {
        let dataFromGoogle: any = {};
        try {
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${params.googleToken}`);
            const data = response.data;
            dataFromGoogle = data;
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        let result = await this.exec(this.model.findOne({
            where: {
                login_type: 'GOOGLE',
                username: dataFromGoogle.user_id
            }
        }))

        if (!result) {
            const body: any = {
                login_type: 'GOOGLE',
                username: dataFromGoogle.user_id,
                fullname: dataFromGoogle.email,
                email: dataFromGoogle.email,
            }
            result = await this.exec(this.model.create(body, this.applyCreateOptions(option)))
            result.isNewUser = true;
            //this.createPackUser(result.id)
        }
        return result;
    }
}