import { SeverityLevel } from "./severityLevel";
import * as winston from "winston";
import * as winstonDailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  defaultMeta: { service: "Auth-Service" },
  format: winston.format.combine(winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.json()),
  transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV == "prod") {
  logger.add(
    new winstonDailyRotateFile({
      level: SeverityLevel.INFO,
      datePattern: "YYYY-MM-DD",
      filename: process.env.LOG_FILE_NAME || "auth-service-%DATE%.log",
      dirname: process.env.LOG_FILE_DIR || ".",
    })
  );
}

export const log = (message: string, severityLevel: SeverityLevel = SeverityLevel.INFO, error?: any) => {
  const errorDetails = error ? { error: { message: error.message, stack: error.stack, name: error.name } } : {};
  logger.log({ level: severityLevel, message, ...errorDetails });
};
