import { Request, Response } from "express";
import { UserServices } from "../services/UserServices";

const service = new UserServices()

class UserController{
    async createUser(req: Request, res:Response){
        const {
            name,
            Bi,
            sexo,
            empresa,
            organizacao,
            historia,
            email,
            number
        } = req.body

        const user = await service.CreateUser({
            name,
            Bi,
            sexo,
            empresa,
            organizacao,
            historia,
            email,
            number
        })

        return res.status(201).json(user)

    }
}export {UserController}