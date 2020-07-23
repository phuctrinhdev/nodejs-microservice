import { CrudController } from '../crudController'
import { ICrudOption, errorService, employeeService } from '@/services'
export class EmployeeController extends CrudController<typeof employeeService> {
    constructor() {
        super(employeeService)
    }
    async checkUsername(params: any, option?: ICrudOption) {
        return await this.service.checkUsername(params, option)
    }
    async checkLogin(params: any, option?: ICrudOption) {
        return await this.service.checkLogin(params, option)
    }
    // async createAccount(params: ICreateAccountEmployee){
    //     return await this.service.createAccount(params);
    // }

}
