"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const server_1 = require("./server");
const config_1 = require("./config");
(async () => {
    await mongoose.connect(`${config_1.config.mongo.connectionString}/${config_1.config.mongo.dbName}`, { useNewUrlParser: true });
    server_1.Server.startServer();
})();
//# sourceMappingURL=index.js.map