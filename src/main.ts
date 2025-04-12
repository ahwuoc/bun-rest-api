import "reflect-metadata";
import ContainerDI from "./core/container.di";
import UserController from "./controllers/user.controler";
import AppManger from "./core/app.manager";
const PORT = 3000;
ContainerDI.registerServices(UserController);
ContainerDI.getServices(UserController);


AppManger.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
