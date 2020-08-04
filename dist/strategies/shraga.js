"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const config_1 = require("../config");
const ShragaStrategy = require('passport-shraga').Strategy;
function setShragaStrategy() {
    passport.use(new ShragaStrategy(config_1.config.authentication, async (profile, done) => {
        done(null, profile);
    }));
}
exports.setShragaStrategy = setShragaStrategy;
//# sourceMappingURL=shraga.js.map