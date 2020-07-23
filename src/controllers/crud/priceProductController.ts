import { CrudController } from '../crudController'
import { ICrudOption, errorService, priceProductService } from '@/services'
export class PriceProductController extends CrudController<typeof priceProductService> {
    constructor() {
        super(priceProductService)
    }
}
