"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationError extends Error {
    constructor(message, status, name) {
        super();
        this.message = message;
        this.status = status;
        this.name = name;
    }
}
exports.ApplicationError = ApplicationError;
class UserError extends ApplicationError {
    constructor(message = 'User Error', status = 400) {
        super(message, status, 'UserError');
    }
}
exports.UserError = UserError;
class ServerError extends ApplicationError {
    constructor(message = 'Server Error', status = 500) {
        super(message, status, 'ServerError');
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=application.js.map