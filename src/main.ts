import "reflect-metadata";
import AppManger from "./core/manager/app.manager";
import UserController from "./controllers/user.controler";
import { Context } from "elysia";
const PORT = 3000;

new AppManger({
  prefix: ["api"],
  controllers: [UserController],
});


AppManger.init();
AppManger.listen(PORT, () => {
  console.log(`🚀Server running at http://localhost:${PORT}`);
});
