import { CrudService, ICrudOption } from '../crudService.pg'
import { PriceHistory } from '@/models/tables'

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
export class PriceProductService extends CrudService<typeof PriceHistory> {
    constructor() {
        super(PriceHistory)
    }
}