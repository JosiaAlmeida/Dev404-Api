import { Request, Response } from "express";
import { ActionsUserServices } from "../services/ActionsUserServices";


class ActionsUserController{
    async handle(req: Request, res: Response){
        const {email} = req.body
        const ActionsUser = new ActionsUserServices()
        const Action = await ActionsUser.execute(email)
        return res.json(Action)
    }
}export {ActionsUserController}