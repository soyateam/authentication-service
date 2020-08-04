import * as mongoose from "mongoose";
import { Server } from './server';
import { config } from "./config";

(async () => {
  await mongoose.connect(config.mongo.connectionString, { useNewUrlParser: true });
  Server.startServer();
})();
