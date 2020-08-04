"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const session = require("express-session");
const config_1 = require("./config");
const handler_1 = require("./utils/errors/handler");
const logger_1 = require("./utils/logger/logger");
const authentication_handler_1 = require("./authentication/authentication.handler");
const shraga_authentication_router_1 = require("./authentication/shraga.authentication.router");
class Server {
    constructor() {
        this.setHeaders = (req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');
            next();
        };
        this.app = express();
        this.configurationMiddleware();
        this.initializeErrorHandler();
        this.initializeShragaAuthenticator();
        this.app.listen(config_1.config.server.port, () => {
            logger_1.logger.log(`listening on port ${config_1.config.server.port}`);
        });
    }
    static startServer() {
        return new Server();
    }
    configurationMiddleware() {
        this.app.use(this.setHeaders);
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }
    initializeErrorHandler() {
        this.app.use(handler_1.userErrorHandler);
        this.app.use(handler_1.serverErrorHandler);
        this.app.use(handler_1.unknownErrorHandler);
    }
    initializeShragaAuthenticator() {
        this.app.use(session({
            secret: config_1.config.session.secret,
            resave: false,
            saveUninitialized: true,
        }));
        authentication_handler_1.AuthenticationHandler.initialize(this.app);
        this.app.use('/auth/', shraga_authentication_router_1.AuthenticationRouter);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map