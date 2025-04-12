import { Request, Response, NextFunction } from "express";
import { UserService } from "../service/UserService";

export default class UserController {
    static async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users = await UserService.getAllUsers();
            res.json(users); 
        } catch (error) {
            next(error);
        }
    }

    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body;
            const user = await UserService.createUser(name, email, password);
            res.status(201).json(user); 
        } catch (error) {
            next(error);
        }
    }
}
