import { CrudService, ICrudOption } from '../crudService.pg'
import { Country } from '@/models/tables'

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
export class CountryService extends CrudService<typeof Country> {
    constructor() {
        super(Country)
    }
    async search(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        if(option.include[0].where.country_id){
            delete option.include[0].where.country_id;
        }
        const countries = await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        );
        return countries;
    }
}