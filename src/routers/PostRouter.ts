import express from "express";
import  UserController  from "@controllers/UseController";

const router = express.Router();

router.route('/post')
.get(UserController.getAllUsers)
.post(UserController.createUser)


router.route('/post/:id').get(UserController.createUser)

export default router;