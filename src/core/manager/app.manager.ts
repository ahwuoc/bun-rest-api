import { Elysia } from "elysia";
import { Constructor, METADATA_KEYS } from "../utils/types";
import ContainerDI from "./dependencies-injection.manager";
import { getMetadata } from "../dependencies/metadata";
import { combinePath } from "../utils/common";
import registerRouter from "../routes/register.routes";
type TAppManager = {
  controllers?: Constructor<any>[];
  prefix?: string[];
};
export default class AppManger {
  public static app: Elysia;
  private static controllers: Constructor<any>[];
  private static prefix: string[];
  private static container: typeof ContainerDI;
  private static instances: any;

  constructor({ controllers, prefix }: TAppManager) {
    AppManger.app = new Elysia();
    AppManger.controllers = controllers ?? [];
    AppManger.prefix = prefix ?? [];
    AppManger.container = ContainerDI;
  }

  static listen(port: number, callback: () => void) {
    AppManger.app.listen(port, callback);
  }
  static init() {
    AppManger.DIRegister();
    AppManger.RouteRegister();
  }

  static DIRegister() {
    AppManger.instances = AppManger.controllers.map((controller) => {
      AppManger.container.registerServices(controller);
      return AppManger.container.getServices(controller);
    });
  }
  static RouteRegister() {
    for (const instance of AppManger.instances) {
      const router = registerRouter(instance);
      AppManger.app.use(router);
    }
  }
}
