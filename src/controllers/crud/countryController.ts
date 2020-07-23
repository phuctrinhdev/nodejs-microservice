import { CrudController } from '../crudController'
import { ICrudOption, errorService, countryService } from '@/services'
export class CountryController extends CrudController<typeof countryService> {
    constructor() {
        super(countryService)
    }
    async search(option: any) {
        return await this.service.search(option)
    }
}
