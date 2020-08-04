import AdminModel from "./admin.model";

export class AdminRepository {
    public static isAdmin(id: string) {
        return AdminModel.findOne({ "userID": id });
    }
}