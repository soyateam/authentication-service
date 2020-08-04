import { AdminRepository } from "./admin.repository";

export class AdminManager {
    public static async isAdmin(id: string) {
        return AdminRepository.isAdmin(id);
    }
}