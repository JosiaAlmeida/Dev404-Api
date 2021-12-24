import { Request, Response } from "express";
import { UserOnlyNow } from "../services/UserOnlyNow";


class UserOnlyNowController{
    async handle(req: Request, res: Response){
        const {email} = req.body
        const userOnly = new UserOnlyNow()
        const userActive = await userOnly.execute(email)

        return res.status(200).json(userActive)
    }
}export {UserOnlyNowController}