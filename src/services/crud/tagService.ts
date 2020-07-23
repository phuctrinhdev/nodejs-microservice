import { CrudService, ICrudOption } from '../crudService.pg'
import { Tag } from '@/models/tables'

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
export class TagService extends CrudService<typeof Tag> {
    constructor() {
        super(Tag)
    }
}