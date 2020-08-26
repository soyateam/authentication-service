import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as session from 'express-session';
import { config } from './config';
import { userErrorHandler, serverErrorHandler, unknownErrorHandler } from './utils/errors/handler';
import { log } from './utils/logger/logger';
import { PassportHandler } from './passport/passport.handler';
import { Router } from './router';

export class Server {
  public app: express.Application;

  public static startServer(): Server {
    return new Server();
  }

  private constructor() {
    this.app = express();
    this.configurationMiddleware();
    this.initializeErrorHandler();
    this.initializeShragaAuthenticator();

    this.app.use(Router);

    this.app.listen(config.server.port, () => {
      log(`server is listening on port ${config.server.port}`);
    });
  }

  private setHeaders = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Authorization, Origin, X-Requested-With, Content-Type'
    );
    next();
  };

  private configurationMiddleware() {
    this.app.use(this.setHeaders);
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeErrorHandler() {
    this.app.use(userErrorHandler);
    this.app.use(serverErrorHandler);
    this.app.use(unknownErrorHandler);
  }

  private initializeShragaAuthenticator() {
    this.app.use(
      session({
        secret: config.session.secret,
        resave: false,
        saveUninitialized: true,
      })
    );

    PassportHandler.initialize(this.app);
  }
}
