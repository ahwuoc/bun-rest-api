import { Elysia } from "elysia";
import { Constructor } from "./utils/types";
type TAppManager = {
  controllers?: Constructor<any>[];
  prefix?: string[];
};
export default class AppManger {
  private static app: Elysia;
  private static controllers: Constructor<any>[];
  private static prefix: string[];

  static configure({ controllers, prefix }: TAppManager) {
    AppManger.app = new Elysia();
    AppManger.controllers = controllers ?? [];
    AppManger.prefix = prefix ?? [];
  }

  static listen(port: number, callback: () => void) {
    AppManger.app.listen(port, callback);
  }
}
