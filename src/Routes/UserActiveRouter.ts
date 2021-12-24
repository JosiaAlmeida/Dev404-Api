import { Router } from "express";
import { UserOnlyNowController } from "../controllers/UserOnlyNowController";

const routesUserActive = Router()

const userOnly = new UserOnlyNowController()

routesUserActive.post('/', userOnly.handle)

export {routesUserActive}