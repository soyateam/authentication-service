import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import * as express from 'express';

import { NotFoundError, NotPermittedError } from "../utils/errors/user";
import { IUser } from "../user/user.interface"
import { VipManager } from "../vip/vip.manager";
import { setShragaStrategy } from "../strategies/shraga";
import { config } from '../config';

export class AuthenticationHandler {
    static initialize(app: express.Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.serializeUser(this.serialize);
        passport.deserializeUser(this.deserialize);

        setShragaStrategy();

        return passport.initialize();
    }

    protected static serialize(user: any, done: (err?: Error, id?: string) => void) {
        done(undefined, jwt.sign({ ...user }, config.authentication.secret));
    }

    protected static async deserialize(token: string, done: (err?: Error, id?: any) => void) {
        done(undefined, jwt.decode(token));
    }

    static async isLoggedIn(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.cookies.token) {
            res.redirect(config.clientEndpoint);
        } else {
            next();
        }
    }

    static authenticate() {
        return passport.authenticate('shraga');
    }

    static async redirectUser(req: express.Request, res: express.Response) {
        const user = req.user;
        const parsedUser: IUser = JSON.parse(JSON.stringify(user));

        if (!parsedUser) throw new NotFoundError();

        const vip = await VipManager.getVipByID(parsedUser.id);
        if (!vip) throw new NotPermittedError();

        const userWithRole = {
            ...parsedUser,
            role: vip.role
        }

        const token = jwt.sign(userWithRole, config.authentication.secret);

        res.cookie(config.authentication.token, token);
        res.redirect(config.clientEndpoint);
    }
}
