"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const jwt = require("jsonwebtoken");
const admin_manager_1 = require("../admin/admin.manager");
const shraga_1 = require("../strategies/shraga");
const config_1 = require("../config");
class AuthenticationHandler {
    static initialize(app) {
        app.use(passport.initialize());
        app.use(passport.session());
        passport.serializeUser(this.serialize);
        passport.deserializeUser(this.deserialize);
        shraga_1.setShragaStrategy();
        return passport.initialize();
    }
    static serialize(user, done) {
        done(undefined, jwt.sign({ ...user }, config_1.config.authentication.secret));
    }
    static async deserialize(token, done) {
        done(undefined, jwt.decode(token));
    }
    static authenticate() {
        return passport.authenticate('shraga');
    }
    static async redirectUser(req, res) {
        const { user } = req;
        const formatedUser = JSON.parse(JSON.stringify(user));
        if (!formatedUser)
            throw new Error("fsfdsaf");
        if (!admin_manager_1.AdminManager.isAdmin(formatedUser.id)) {
            console.log("sadsadsa");
        }
        const token = jwt.sign(formatedUser, config_1.config.authentication.secret);
        res.cookie(config_1.config.authentication.token, token);
        res.redirect(config_1.config.clientEndpoint);
    }
}
exports.AuthenticationHandler = AuthenticationHandler;
//# sourceMappingURL=authentication.handler.js.map