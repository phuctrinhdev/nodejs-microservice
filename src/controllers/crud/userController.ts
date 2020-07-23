import { CrudController } from '../crudController'
import { ICrudOption, errorService, userService } from '@/services'
export class UserController extends CrudController<typeof userService> {
    constructor() {
        super(userService)
    }
    async checkLoginWithFacebook(params: any, option?: ICrudOption) {
        return await this.service.checkLoginWithFacebook(params, option)
    }
    async checkLoginWithGoogle(params: any, option?: ICrudOption) {
        return await this.service.checkLoginWithGoogle(params, option)
    }
}
