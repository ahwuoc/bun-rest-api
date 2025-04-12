"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const ormconfig_1 = require("../ormconfig");
const User_1 = require("../entities/User");
exports.UserRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
