import * as passport from 'passport';
import { config } from '../config';

const ShragaStrategy = require('passport-shraga').Strategy;

export function setShragaStrategy() {
    passport.use(new ShragaStrategy(config.authentication.shraga, async (profile: any, done: any) => {
        done(null, profile);
    }));
}
