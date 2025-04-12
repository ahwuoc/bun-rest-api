import * as express from "express";
import UserController  from "@controllers/UseController";

const router = express.Router();

router.route('/users')
.get(UserController.getAllUsers)
.post(UserController.createUser)

export default router;
