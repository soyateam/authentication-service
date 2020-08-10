import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { NotFoundError, NotPermittedError } from "../utils/errors/user";
import { IUser } from "../user/user.interface"
import { VipManager } from "../vip/vip.manager";
import { config } from '../config';

export class AuthenticationHandler {
    static async isLoggedIn(req: Request, res: Response, next: NextFunction) {
        if (req.cookies.token && jwt.verify(req.cookies.token, config.authentication.secret)) {
            console.log("dsgfdsgd")
            res.redirect(config.clientEndpoint);
        } else {
            next();
        }
    }

    static async redirectUser(req: Request, res: Response) {
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
