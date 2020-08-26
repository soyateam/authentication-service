import { Server } from './server';
import { SeverityLevel } from './utils/logger/severityLevel';
import { log } from './utils/logger/logger';
import { connectToMongo } from './utils/dbConnector';

process.on('uncaughtException', (err: Error) => {
  console.error('Unhandled Exception', err.stack);
  log('Unhandled Exception', SeverityLevel.ERROR, err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  log('Unhandled Rejection', SeverityLevel.ERROR, err);
  process.exit(1);
});

(async () => {
  await connectToMongo();

  Server.startServer();
})();
