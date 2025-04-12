import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

export class UserService {
    static async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }

    static async createUser(name: string, email: string, password: string): Promise<User> {
        const newUser = UserRepository.create({ name, email, password });
        return await UserRepository.save(newUser);
    }
}
