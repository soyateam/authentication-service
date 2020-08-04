"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_model_1 = require("./admin.model");
class AdminRepository {
    static isAdmin(id) {
        return admin_model_1.default.findOne({ "userID": id });
    }
}
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=admin.repository.js.map