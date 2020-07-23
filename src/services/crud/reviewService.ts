import { CrudService, ICrudOption } from '../crudService.pg'
import { Review } from '@/models/tables'

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
export class ReviewService extends CrudService<typeof Review> {
    constructor() {
        super(Review)
    }
}