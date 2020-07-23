import { CrudController } from '../crudController'
import { ICrudOption, errorService, productShopService } from '@/services'
export class ProductShopController extends CrudController<typeof productShopService> {
    constructor() {
        super(productShopService)
    }
    async changeAllNotInUse(body: any) {
        return await this.service.changeAllNotInUse(body)
    }
}
