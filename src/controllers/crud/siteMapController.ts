import { CrudController } from '../crudController'
import { ICrudOption, errorService, siteMapService } from '@/services'
export class SiteMapController extends CrudController<typeof siteMapService> {
    constructor() {
        super(siteMapService)
    }
    async createSiteMap() {
        return await this.service.createSiteMap()
    }
}
