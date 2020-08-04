import VipModel from "./vip.model";

export class VipRepository {
    public static getVipByID(id: string) {
        return VipModel.findOne({ "userID": id });
    }
}