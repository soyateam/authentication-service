import * as passport from 'passport';
import { Router } from 'express';
import { wrapAsync } from "../utils/wrapper";
import { AuthenticationHandler } from './authentication.handler';

const AuthenticationRouter = Router();

AuthenticationRouter.get('/login', AuthenticationHandler.isLoggedIn, passport.authenticate('shraga'));
AuthenticationRouter.post('/callback', passport.authenticate('shraga'), wrapAsync(AuthenticationHandler.redirectUser));

export { AuthenticationRouter };
