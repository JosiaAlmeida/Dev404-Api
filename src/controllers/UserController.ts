import { Request, Response } from "express";
import { UserServices } from "../services/UserServices";

const service = new UserServices()

class UserController{
    async ListUser(req: Request, res:Response){
        const Users = await service.AllUser()
        return res.status(200).json(Users) 
    }

    async FindById(req: Request, res:Response){
        const {id} = req.params
        
        const userUpdate = await service.FindById(id)

        return res.status(200).json(userUpdate)
        
    }

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


    async Update(req: Request, res:Response){
        const {
            id,
            name,
            Bi,
            sexo,
            empresa,
            organizacao,
            historia,
            email,
            number
        } = req.body
        
        const userUpdate = await service.UpdateUser(id, {
            name,
            Bi,
            sexo,
            empresa,
            organizacao,
            historia,
            email,
            number
        })

        return res.status(200).json(userUpdate)
    }

    async DeleteUser(req: Request, res:Response){
        const {id} = req.params
        const User = await service.DistroyUser(id)

        return res.status(204).json(User)
    }

}export {UserController}