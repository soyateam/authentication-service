import * as mongoose from "mongoose";
import { Server } from './server';
import { config } from "./config";

(async () => {
  await mongoose.connect(`${config.mongo.connectionString}/${config.mongo.dbName}`, { useNewUrlParser: true });
  Server.startServer();
})();
