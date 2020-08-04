"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
function userErrorHandler(error, req, res, next) {
    if (error instanceof application_1.UserError) {
        res.status(error.status).send({
            type: error.name,
            message: error.message,
        });
        next();
    }
    else {
        next(error);
    }
}
exports.userErrorHandler = userErrorHandler;
function serverErrorHandler(error, req, res, next) {
    if (error instanceof application_1.ServerError) {
        res.status(error.status).send({
            type: error.name,
            message: error.message,
        });
        next();
    }
    else {
        next(error);
    }
}
exports.serverErrorHandler = serverErrorHandler;
function unknownErrorHandler(error, req, res, next) {
    res.status(500).send({
        type: error.name,
        message: error.message,
    });
    next(error);
}
exports.unknownErrorHandler = unknownErrorHandler;
//# sourceMappingURL=handler.js.map