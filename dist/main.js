"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ormconfig_1 = require("./ormconfig");
const UserRouter_1 = require("./routers/UserRouter");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", UserRouter_1.default);
const PORT = process.env.PORT || 3000;
ormconfig_1.AppDataSource.initialize()
    .then(() => {
    console.log("📌 Database connected successfully!");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
    .catch((error) => console.log("❌ Error connecting to database:", error));
