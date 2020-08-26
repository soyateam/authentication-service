import * as express from 'express';
import { logger } from '../logger/logger';
import { SeverityLevel } from '../logger/severityLevel'
import { ServerError, UserError } from './application';

export function userErrorHandler(error: Error, _req: express.Request, res: express.Response,
  next: express.NextFunction) {
  if (error instanceof UserError) {
    logger.log(`${error.name} was thrown with status ${error.status} and message ${error.message}`, SeverityLevel.Error);
    res.status(error.status).send({
      type: error.name,
      message: error.message,
    });
    next();
  } else {
    next(error);
  }
}

export function serverErrorHandler(error: Error, _req: express.Request, res: express.Response,
  next: express.NextFunction) {
  if (error instanceof ServerError) {
    logger.log(`${error.name} was thrown with status ${error.status} and message ${error.message}`, SeverityLevel.Error);
    res.status(error.status).send({
      type: error.name,
      message: error.message,
    });
    next();
  } else {
    next(error);
  }
}

export function unknownErrorHandler(error: Error, _req: express.Request, res: express.Response,
  next: express.NextFunction) {
  logger.log(`${error.name} was thrown with status 500 and message ${error.message}`, SeverityLevel.Error);
  res.status(500).send({
    type: error.name,
    message: error.message,
  });
  next(error);
}
