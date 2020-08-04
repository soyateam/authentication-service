"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_repository_1 = require("./admin.repository");
class AdminManager {
    static async isAdmin(id) {
        return admin_repository_1.AdminRepository.isAdmin(id);
    }
}
exports.AdminManager = AdminManager;
//# sourceMappingURL=admin.manager.js.map