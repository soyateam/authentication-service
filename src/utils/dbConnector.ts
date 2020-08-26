import * as mongoose from "mongoose";
import { config } from "../config";
import { SeverityLevel } from "./logger/severityLevel";
import { logger } from "./logger/logger";

export const connectToMongo = async () => {
    logger.log(`[MongoDB] trying to mongo server:  ${config.mongo.connectionString}`, SeverityLevel.Informational);
    try {
        await mongoose.connect(config.mongo.connectionString, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
    } catch (err) {
        logger.log(`did not connect to ${config.mongo.connectionString}. error: ${err}`, SeverityLevel.Error);
        return;
    }

    logger.log(`successfully connected: ${config.mongo.connectionString}`, SeverityLevel.Informational);
};
