import { CrudController } from '../crudController'
import { ICrudOption, errorService, tagService } from '@/services'
export class TagController extends CrudController<typeof tagService> {
    constructor() {
        super(tagService)
    }
}
