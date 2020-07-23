import { BaseError } from './base'
class DatabaseException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 500,
            type: `database_exception_${key}`,
            message
        })
    }
}
export class DatabaseErrorService {
    recordNotFound() {
        return new DatabaseException('record_not_found', 'Record Not Found')
    }
    queryFail(message: string = "Query Fail") {
        return new DatabaseException('query_fail', message)
    }
    invalidScope(message: string = "Invalid scope") {
        return new DatabaseException('invalid_scope', message)
    }
}