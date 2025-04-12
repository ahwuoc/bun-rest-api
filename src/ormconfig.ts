import { DataSource } from "typeorm";
import  * as dotenv from "dotenv";

dotenv.config();


 const AppDataSource = new DataSource({
    type: "mysql", 
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "mydb",
    entities: ["src/entities/*.ts"],
    synchronize: true, 
    logging: true,
});
export default AppDataSource;
