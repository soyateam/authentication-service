import { Server } from './server';
import { SeverityLevel } from "./utils/logger/severityLevel";
import { logger } from "./utils/logger/logger";
import { connectToMongo } from "./utils/dbConnector";

process.on("uncaughtException", (err: Error) => {
  console.error("Unhandled Exception", err.stack);
  logger.log("Unhandled Exception", SeverityLevel.Error);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err);
  logger.log("Unhandled Rejection", SeverityLevel.Error);
  process.exit(1);
});

(async () => {
  await connectToMongo();
  
  Server.startServer();
})();
