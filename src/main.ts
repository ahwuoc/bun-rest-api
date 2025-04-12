import express from "express";
import AppDataSource from "./ormconfig";
import userRoutes from "@routers/UserRouter";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {   
        await AppDataSource.initialize();
        console.log("📌 Database connected successfully!");
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    } catch (error: any) {
        switch (error.code) {
            case "ER_ACCESS_DENIED_ERROR":
                console.error("🔴 Lỗi: Sai tên đăng nhập hoặc mật khẩu MySQL.");
                break;
            case "ER_BAD_DB_ERROR":
                console.error("🔴 Lỗi: Database không tồn tại. Hãy kiểm tra lại biến DB_NAME.");
                break;
            case "ECONNREFUSED":
                console.error("🔴 Lỗi: Không thể kết nối đến MySQL. Hãy kiểm tra xem MySQL đã chạy chưa.");
                break;
            default:
                console.error("🔴 Lỗi không xác định:", error);
                break;
        }
    }
}

startServer();