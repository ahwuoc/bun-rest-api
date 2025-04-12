import { ZeInjectTable } from "../core/dependencies/class.decorator";

@ZeInjectTable()
export default class categoryServie {
  create() {
    console.log("tao them danh muc");
  }
}
