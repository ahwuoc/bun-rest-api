import { ZeController } from "../core/dependencies/class.decorator";
import { ZeGET, ZePOST } from "../core/dependencies/method.decorator";
import userService from "../services/user.service";

@ZeController("/users")
export default class UserController {
  constructor(private userServices: userService) {}
  @ZeGET("/test")
  getAllUsers() {
    return "All users";
  }
  @ZePOST(":id")
  getTest() {
    return "Test";
  }
}
