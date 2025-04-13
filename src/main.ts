import "reflect-metadata";
import AppManger from "./core/app.manager";
import UserController from "./controllers/user.controler";
const PORT = 3000;

AppManger.configure({
  prefix: ["/api"],
  controllers: [UserController],
});

AppManger.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
