"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UseController_1 = require("../controller/UseController");
const router = express.Router();
router.get("/users", UseController_1.UserController.getAllUsers);
exports.default = router;
