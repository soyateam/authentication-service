import * as mongoose from 'mongoose';
import { config } from '../config';
import { SeverityLevel } from './logger/severityLevel';
import { log } from './logger/logger';

export const connectToMongo = async () => {
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
