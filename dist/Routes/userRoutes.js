import { Router } from "express";
import UserController from "../controllers/UserController";
import { ensuredUser } from "../middleware/ensuredUser";
const routerUser = Router();
const User = new UserController();
routerUser.get('/', ensuredUser, User.ListUser);
routerUser.get('/:id', ensuredUser, User.FindById);
routerUser.put('/', ensuredUser, User.Update);
routerUser.post('/', User.createUser);
routerUser.delete('/delete/:id', ensuredUser, User.DeleteUser);
export default routerUser;
//# sourceMappingURL=userRoutes.js.map