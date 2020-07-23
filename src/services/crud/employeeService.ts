import { CrudService, ICrudOption } from '../crudService.pg'
import { Employee } from '@/models/tables'

import {
    sequelize
} from '@/models'

import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
export class EmployeeService extends CrudService<typeof Employee> {
    constructor() {
        super(Employee)
    }
    async update(params: any, option?: ICrudOption) {
        if (params.employee_id !== option.filter.id && params.role !== "SUPERADMIN") {
            throw errorService.auth.permissionDeny()
        }
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        if (params.username != item.username && params.username != undefined) {
            throw errorService.database.queryFail("Không được thay đổi Username")
        } else {
            if (params.role !== "SUPERADMIN") {
                params.type = item.type
            }
            const updatedItem = await this.exec(item.update(params))
            updatedItem.password = undefined
            return updatedItem;
        }
    }
    async create(params: any, option?: ICrudOption) {
        if (params.role !== "SUPERADMIN") {
            throw errorService.auth.permissionDeny()
        }
        const username = params.username;
        const phone = params.phone;
        const resultUserName: any = await this.model.count({
            where: {
                username
            }
        });
        const resultPhone: any = await this.model.count({
            where: {
                phone
            }
        });
        const lenghtPhone = phone.length
        const lenghtUserName = username.length
        if (lenghtUserName <= 3) {
            throw errorService.database.queryFail("Tài khoản phải có từ 4 ký tự trở lên");
        } else if (lenghtPhone > 15 || lenghtPhone < 9) {
            throw errorService.database.queryFail("Số điện thoại sai quy định");
        } else if (resultUserName == 1) {
            throw errorService.database.queryFail(username + " đã tồn tại, vui lòng chọn username khác")
        }
        else if (resultPhone == 1) {
            throw errorService.database.queryFail(phone + " đã tồn tại, vui lòng chọn số điện thoại khác khác")
        } else {
            const createdUser = await this.exec(this.model.create(params, this.applyCreateOptions(option)))
            return createdUser
        }
    }
    async checkUsername(params: any, option?: ICrudOption) {
        const result: any = await this.model.count({
            where: { username: params.username }
        });
        if (result >= 1) {
            const duplicate = true
            const resultOfCheckUser = params.username + " đã tồn tại, vui lòng chọn username khác"
            return { duplicate, resultOfCheckUser };
        } else {
            const resultOfCheckUser = "Có thể sử dụng " + params.username
            return { message: resultOfCheckUser };
        }
    }
    async checkLogin(params: any, option?: ICrudOption) {
        const result = await this.exec(this.model.findOne({
            where: {
                username: params.username,
                password: params.password
            }
        }))
        if (result && result.status) {
            result.password = undefined;
            return result;
        } else {
            throw errorService.database.queryFail("Hãy kiểm tra lại tài khoản và mật khẩu")
        }
    }

    // async createAccount(params: ICreateAccountEmployee) {
    //     const t = await sequelize.transaction();
    //     let {
    //         email,
    //         password,
    //         fullname,
    //         avatar,
    //         phone
    //     } = params;

    //     try {
    //         let employee = await this.exec(Employee.create(params, {
    //             transaction: t
    //         }));

    //         let user = await firebaseService.createUser({
    //             email,
    //             password
    //         })

    //         t.commit();

    //         return {
    //             employee,
    //             user
    //         }
    //     }
    //     catch (err) {
    //         t.rollback();
    //         if (err.code && err.message) throw errorService.firebase.cannotCreateAccount(err)
    //         throw err;
    //     }

    // }

}