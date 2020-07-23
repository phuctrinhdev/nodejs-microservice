import { CrudService, ICrudOption } from '../crudService.pg'
import { Food, FoodProduct } from '@/models/tables'

import {
    sequelize
} from '@/models'
import axios from 'axios';
import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'
import { config } from '@/config'
export class FoodService extends CrudService<typeof Food> {
    constructor() {
        super(Food)
    }
    async checkIssetAndCreate(vivino_foods: any, product_id: string) {
        const transaction = await sequelize.transaction();
        try {
            if (vivino_foods.length > 0) {
                for (let i = 0; i < vivino_foods.length; i++) {
                    const item = vivino_foods[i];
                    let food = await this.exec(this.model.findOne({
                        where: {
                            name: item.name,
                            vivino_id: item.id
                        }
                    }));
                    if(!food){
                        const data: any = {
                            name: item.name,
                            vivino_id: item.id
                        }
                        food = await this.exec(this.model.create(data));
                    }
                    let food_product = await this.exec(FoodProduct.findOne({
                        where: {
                            product_id: product_id,
                            food_id: food.id
                        }
                    }));
                    if(!food_product){
                        const body: any = {
                            product_id: product_id,
                            food_id: food.id
                        }
                        await this.exec(FoodProduct.create(body, { transaction }))
                    }
                }
                transaction.commit();
            }
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
}