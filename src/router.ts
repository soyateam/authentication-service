import * as express from "express";
import { AuthenticationRouter } from './authentication/authentication.router';

const Router = express.Router();

Router.use("/auth/", AuthenticationRouter);
Router.get('/isAlive', (_req: express.Request, res: express.Response) => {
    res.status(200).send('OK');
});

export { Router };