import * as mongoose from 'mongoose';
import { Server } from './server';
import { SeverityLevel } from './utils/logger/severityLevel';
import { log } from './utils/logger/logger';
import { config } from './config';

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

async function connectToMongo() {
  log(`[MongoDB] trying to mongo server:  ${config.mongo.connectionString}`, SeverityLevel.INFO);
  try {
    await mongoose.connect(config.mongo.connectionString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (err) {
    log(`did not connect to ${config.mongo.connectionString}. error: ${err}`, SeverityLevel.ERROR);
    return;
  }

  log(`successfully connected: ${config.mongo.connectionString}`, SeverityLevel.INFO);
};


(async () => {
  await connectToMongo();

  Server.startServer();
})();
