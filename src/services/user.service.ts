import { ZeInjectTable } from "../core/dependencies/class.decorator";
import categoryServie from "./category.service";

@ZeInjectTable()
export default class userService {
  constructor(private categoryServie: categoryServie) {}
  create() {
    console.log();
  }
}
