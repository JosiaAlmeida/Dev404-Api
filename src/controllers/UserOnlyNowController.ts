import { Request, Response } from "express";
import UserOnlyNow from "../services/UserOnlyNow";

const userOnly = new UserOnlyNow()
export default class UserOnlyNowController{
    async handle(req: Request, res: Response){
        const {email} = req.body
        const userActive = await userOnly.execute(email)

        return res.status(200).json(userActive)
    }

    async CreateAdmin(req: Request, res: Response){
        const {email, password,superKyUser} = req.body
        const Admin = await userOnly.CreateAdmin({email, password,superKyUser})
        return res.status(201).json(Admin)
    }
    
    async LoginAdmin(req: Request, res: Response){
        const {email, password,superKyUser} = req.body
        const Admin = await userOnly.LoginAdmin({email, password,superKyUser})
        return res.status(201).json(Admin)
    }
}