"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_handler_1 = require("./authentication.handler");
const AuthenticationRouter = express_1.Router();
exports.AuthenticationRouter = AuthenticationRouter;
AuthenticationRouter.get('/login', authentication_handler_1.AuthenticationHandler.authenticate());
AuthenticationRouter.post('/callback', authentication_handler_1.AuthenticationHandler.authenticate(), authentication_handler_1.AuthenticationHandler.redirectUser);
//# sourceMappingURL=shraga.authentication.router.js.map