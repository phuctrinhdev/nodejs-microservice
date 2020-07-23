import { CrudController } from '../crudController'
import { ICrudOption, errorService, reviewService } from '@/services'
export class ReviewController extends CrudController<typeof reviewService> {
    constructor() {
        super(reviewService)
    }
}
