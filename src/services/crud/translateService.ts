import { CrudService, ICrudOption } from '../crudService.pg'
import { Translate } from '@/models/tables'

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
export class TranslateService extends CrudService<typeof Translate> {
    constructor() {
        super(Translate)
    }
    async getListOverRide(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        try {
            const list_translate =  await this.exec(
                this.modelWithScope(option.scope)
                    .findAndCountAll(this.applyFindOptions(option))
            );
            return list_translate.rows.reduce(
                (obj: any, item: any) => Object.assign(obj, { [item.key]: {
                    'value' : item.value,
                    'value_vn': item.value_vn
                } }), {}
            );
        } catch (error) {
            throw error;
        }
    }
}