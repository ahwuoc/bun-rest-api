"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class Mysql {
    //
    constructor() {
        this.pool = (0, promise_1.createPool)({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    //single instance duy nhat
    static gI() {
        if (!Mysql.instance) {
            Mysql.instance = new Mysql();
        }
        return Mysql.instance;
    }
    getConnect() {
        return this.pool;
    }
}
exports.default = Mysql.gI();
