import * as passport from 'passport';
import { config } from '../config';

const ShragaStrategy = require('passport-shraga').Strategy;

export function setShragaStrategy() {
    passport.use(new ShragaStrategy(config.authentication, async (profile: any, done: any) => {
        done(null, profile);
    }));
}
