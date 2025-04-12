import { ZeController } from "../core/dependencies/class.decorator";
import { ZePOST } from "../core/dependencies/method.decorator";
import userService from "../services/user.service";

@ZeController("/users")
export default class UserController {
  constructor(private userServices: userService) {}
  @ZePOST()
  getAllUsers() {
    return "All users";
  }
}
