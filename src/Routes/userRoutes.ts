import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routerUser = Router()

const User = new UserController()

routerUser.get('/', User.ListUser)

routerUser.get('/:id', User.FindById)

routerUser.put('/', User.Update)

routerUser.post('/', User.createUser)

routerUser.delete('/delete/:id', User.DeleteUser)

export {routerUser}