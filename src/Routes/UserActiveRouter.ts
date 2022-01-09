import { Router } from "express";
import ActionsUserController from "../controllers/ActionsUserController";
import UserOnlyNowController from "../controllers/UserOnlyNowController";
import { ensuredUser } from "../middleware/ensuredUser";

const routesUserActive = Router()

const userOnly = new UserOnlyNowController()
const ActionsUser = new ActionsUserController()

routesUserActive.post('/Actions',ensuredUser, ActionsUser.handle)

routesUserActive.post('/', userOnly.handle)

routesUserActive.post('/admin/create', userOnly.CreateAdmin)
routesUserActive.post('/admin/login', userOnly.LoginAdmin)

export default routesUserActive