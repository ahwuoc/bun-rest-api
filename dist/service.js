"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./routes/router");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
