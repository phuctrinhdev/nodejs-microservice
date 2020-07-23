import {
    errorService,
} from '@/services'
import { BaseError } from '@/services/errors'
import { config } from '@/config'
import { Model, BaseModel, DocumentQuery } from '@/models'
export interface ICrudOption {
    filter?: any
    limit?: number
    offset?: number
    fields?: string[]
    populates?: any
    lean?: boolean
}
export interface ICrudExecOption {
    allowNull?: boolean
}
export class CrudService<T extends Model> {
    constructor(model: T) {
        this.model = model
    }
    model: T

    async exec(promise: Promise<any> | any, option: ICrudExecOption = { allowNull: true }) {
        try {
            let result;
            if (promise.hasOwnProperty("exec")) {
                result = await promise.exec();
            } else {
                result = await promise;
            }
            if ((result === undefined || result === null) && !option.allowNull)
                throw errorService.database.recordNotFound()
            return result;
        } catch (err) {
            if (err instanceof BaseError) throw err
            if (config.server.debug) {
                if (err.errors && err.errors[0]) {
                    throw errorService.database.queryFail(err.errors[0].message)
                } else {
                    throw errorService.database.queryFail(err.message)
                }
            } else {
                throw err
            }
        }
    }
    async getList(option: ICrudOption = {
        filter: {},
        limit: config.database.defaultPageSize,
        offset: 0
    }) {
        let query = this.model.find();
        query = this.applyQueryOptions(query, option)
        query.setOptions({
            toJson: { virtual: true }
        })
        const rows = await this.exec(query)
        const count = await query.count()
        return { count, rows }
    }
    async getItem(option?: ICrudOption) {
        let query = this.model.findOne()
        query = this.applyQueryOptions(query, option)
        return await this.exec(query, { allowNull: false })
    }
    async create(params: any, option?: ICrudOption) {
        const query = this.model.create(params)
        return await this.exec(query)
    }
    async update(params: any, option?: ICrudOption) {
        const query = this.model.findOneAndUpdate(option.filter, params, { new: true })
        return await this.exec(query)
    }
    async delete(option?: ICrudOption) {
        let query = this.model.findOne()
        query = this.applyQueryOptions(query, option)
        const item = await this.exec(query, { allowNull: false })
        return this.exec(item.remove())
    }
    async deleteAll(option?: ICrudOption) {
        let query = this.model.remove(option.filter)
        query = this.applyQueryOptions(query, option)
        return await this.exec(query)
    }

    applyQueryOptions(query: DocumentQuery, option: ICrudOption) {
        if (option.filter) query.where(option.filter)
        if (option.limit) query.limit(option.limit)
        if (option.offset) query.skip(option.offset)
        if (option.fields) query.select(option.fields)
        if (option.populates) {
            for (const populate of option.populates) {
                query.populate(populate)
            }
        }
        if (option.lean) query.lean()
        return query
    }
}