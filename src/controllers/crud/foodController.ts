import { CrudController } from '../crudController'
import { ICrudOption, errorService, foodService } from '@/services'
export class FoodController extends CrudController<typeof foodService> {
    constructor() {
        super(foodService)
    }
    async checkIssetAndCreate(body: any, id: any) {
        return await this.service.checkIssetAndCreate(body, id)
    }
}
