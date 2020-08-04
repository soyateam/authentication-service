"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const severityLevel_1 = require("./severityLevel");
exports.logger = {
    log: (message, severityLevel = severityLevel_1.SeverityLevel.Informational) => {
        console.log(`[${severityLevel}]: ${message}`);
    },
};
//# sourceMappingURL=logger.js.map