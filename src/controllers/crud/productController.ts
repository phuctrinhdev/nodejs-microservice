import { CrudController } from '../crudController'
import { ICrudOption, errorService, productService } from '@/services'
export class ProductController extends CrudController<typeof productService> {
    constructor() {
        super(productService)
    }
    async checkIssetAndCreate(params: any) {
        return await this.service.checkIssetAndCreate(params)
    }
    async checkIssetAndUpdatePrice(params: any) {
        return await this.service.checkIssetAndUpdatePrice(params)
    }
    async checkProductsHaveBeenDeletedFromNow(params: any) {
        return await this.service.checkProductsHaveBeenDeletedFromNow(params)
    }
    async crawlDataProductPageFromVivino(body: any) {
        return await this.service.crawlDataProductPageFromVivino(body)
    }
    async getWineTypeFromVivino(id: any) {
        return await this.service.getWineTypeFromVivino(id)
    }
    async getReviewsFromVivino(id: any, year: any, product_id: any) {
        return await this.service.getReviewsFromVivino(id, year, product_id)
    }
    async getFoodsGrapesOfProductFromVivino(id: any) {
        return await this.service.getFoodsGrapesOfProductFromVivino(id)
    }
    async statistic(params: any) {
        return await this.service.statistic(params)
    }
    async deleteVivinoLink(id: any) {
        return await this.service.deleteVivinoLink(id)
    }
    async search(option: any) {
        return await this.service.search(option)
    }
}
