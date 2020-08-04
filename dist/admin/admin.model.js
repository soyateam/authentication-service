"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const admin_interface_1 = require("./admin.interface");
const AdminSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    role: {
        type: admin_interface_1.ROLE,
        required: true
    }
});
exports.default = mongoose.model("Admin", AdminSchema);
//# sourceMappingURL=admin.model.js.map