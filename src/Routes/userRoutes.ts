import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routerUser = Router()

const User = new UserController()

routerUser.post('/', User.createUser)

export {routerUser}