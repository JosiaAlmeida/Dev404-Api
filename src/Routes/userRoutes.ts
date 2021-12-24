import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ensuredAdmin } from "../middleware/ensuredAdmin";

const routerUser = Router()

const User = new UserController()

routerUser.get('/',ensuredAdmin, User.ListUser)

routerUser.get('/:id',ensuredAdmin, User.FindById)

routerUser.put('/',ensuredAdmin, User.Update)

routerUser.post('/', User.createUser)

routerUser.delete('/delete/:id',ensuredAdmin, User.DeleteUser)

export {routerUser}