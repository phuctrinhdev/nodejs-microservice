import { CrudController } from '../crudController'
import { ICrudOption, errorService, foodProductService } from '@/services'
export class FoodProductController extends CrudController<typeof foodProductService> {
    constructor() {
        super(foodProductService)
    }
}
