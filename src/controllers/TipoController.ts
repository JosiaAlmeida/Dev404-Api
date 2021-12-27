import { Request, Response } from "express";
import TipoServices from "../services/TipoServices";

const service = new TipoServices()

export default class TipoController{
    async ListAll(req:Request, res: Response){
        const Types = await service.ListType()
        return res.status(200).json(Types)
    }

    async FindByType(req:Request, res: Response){
        const {id} = req.params
        const Types = await service.FindByType(id)
        return res.status(200).json(Types)
    }

    async UpdateType(req:Request, res: Response){
        const {id, type} = req.body
        const {user_id} = req
        const Types = await service.UpdateType({id, type, user_id})
        return res.status(200).json(Types)
    }

    async CreateType(req:Request, res: Response){
        const { type} = req.body
        const {user_id} = req
        const Types = await service.createService({user_id, type})

        return res.status(201).json(Types)
    }

    async DeleteType(req:Request, res: Response){
        const {id} = req.params
        const Types = await service.Delete(id)
        return res.status(204).json(Types)
    }
}