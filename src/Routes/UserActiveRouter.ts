import { Router } from "express";
import { UserOnlyNowController } from "../controllers/UserOnlyNowController";

const routesUserActive = Router()

const userOnly = new UserOnlyNowController()

routesUserActive.post('/', userOnly.handle)

routesUserActive.post('/admin/create', userOnly.CreateAdmin)
routesUserActive.post('/admin/login', userOnly.LoginAdmin)

export {routesUserActive}