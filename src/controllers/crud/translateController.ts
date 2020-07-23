import { CrudController } from '../crudController'
import { ICrudOption, errorService, translateService } from '@/services'
export class TransalteController extends CrudController<typeof translateService> {
    constructor() {
        super(translateService)
    }
    async getListOverRide(option?: ICrudOption) {
        return await this.service.getListOverRide(option)
    }
}
