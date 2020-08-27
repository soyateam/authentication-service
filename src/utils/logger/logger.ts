import { SeverityLevel } from './severityLevel';
import * as winston from 'winston';
import { MongoDB } from 'winston-mongodb';
import { config } from '../../config';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.metadata(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV === 'prod') {
  const mongoLogger = new MongoDB({
    level: SeverityLevel.INFO,
    label: config.serviceName,
    collection: `${config.serviceName}-log`,
    db: config.logs.connectionStringLogs,
    expireAfterSeconds: config.logs.expiredInSec,
    tryReconnect: false,
  });

  logger.add(mongoLogger);
}

export const log = (
  message: string,
  severityLevel: SeverityLevel = SeverityLevel.INFO,
  error?: any
) => {
  const errorDetails = error
    ? { error: { message: error.message, stack: error.stack, name: error.name } }
    : {};
  logger.log({ level: severityLevel, message, ...errorDetails });
};
