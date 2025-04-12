import { Elysia } from "elysia";
type TAppManager = {};
export default class AppManger {
  static app = new Elysia();

  static listen(port: number, callback: () => void) {

    AppManger.app.listen(port, callback);
  }
}
