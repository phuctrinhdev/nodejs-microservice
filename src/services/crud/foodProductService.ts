import { CrudService, ICrudOption } from '../crudService.pg'
import { FoodProduct } from '@/models/tables'

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
export class FoodProductService extends CrudService<typeof FoodProduct> {
    constructor() {
        super(FoodProduct)
    }
}