import VipModel from "./vip.model";

export class VipRepository {
    public static getVipByID(id: string) {
        return VipModel.findOne({ "userID": id })
        .then((val) => {
            return val || { userID: '1234', role: 'READ' };
        }).catch((err) => {
            console.log(err);
            return { userID: '1234', role: 'READ' };
        });
    }
}
