import { CrudController } from '../crudController'
import { ICrudOption, errorService, shopService } from '@/services'
export class ShopController extends CrudController<typeof shopService> {
    constructor() {
        super(shopService)
    }
    async checkIssetAndCreate(body: any) {
        return await this.service.checkIssetAndCreate(body)
    }
    async deleteShopHaveBeenDeletedFromNow(body: any) {
        return await this.service.deleteShopHaveBeenDeletedFromNow(body);
    }
    async scheduleUpdate(params: any) {
        return await this.service.scheduleUpdate(params);
    }
}
