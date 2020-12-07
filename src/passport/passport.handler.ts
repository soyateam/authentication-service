
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import * as express from 'express';
;
import { config } from '../config';

const passportShraga = require('passport-shraga');

export class PassportHandler {
    static initialize(app: express.Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.serializeUser(this.serialize);
        passport.deserializeUser(this.deserialize);

        PassportHandler.initalizeShragaStrategy();

        return passport.initialize();
    }

    protected static serialize(user: any, done: (err?: Error, id?: string) => void) {
        done(undefined, jwt.sign({ ...user }, config.authentication.secret));
    }

    protected static async deserialize(token: string, done: (err?: Error, id?: any) => void) {
        done(undefined, jwt.decode(token));
    }

    protected static initalizeShragaStrategy() {
        const strategy = new passportShraga.Strategy(config.authentication.shraga, async (profile: any, done: any) => {
            done(null, profile);
        });
    
        passport.use(strategy);
    }

}
