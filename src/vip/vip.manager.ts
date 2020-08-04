import { VipRepository } from "./vip.repository";

export class VipManager {
    public static async getVipByID(id: string) {
        return VipRepository.getVipByID(id);
    }
}
