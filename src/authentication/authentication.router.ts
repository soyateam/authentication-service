import { Router } from 'express';
import { wrapAsync } from "../utils/wrapper";
import { AuthenticationHandler } from './authentication.handler';

const AuthenticationRouter = Router();

AuthenticationRouter.get('/login', AuthenticationHandler.authenticate());
AuthenticationRouter.post('/callback', AuthenticationHandler.authenticate(), wrapAsync(AuthenticationHandler.redirectUser));

export { AuthenticationRouter };