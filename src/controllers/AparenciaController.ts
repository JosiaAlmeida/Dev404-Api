import { Request, Response } from "express";
import { AparenciaServices } from "../services/AparenciaServices";

const service = new AparenciaServices()

class AparenciaController{
    async ListAll(req:Request, res: Response){
        const Types = await service.ListAparencia()
        return res.status(200).json(Types)
    }

    async FindBy(req:Request, res: Response){
        const {id} = req.params
        const Types = await service.FindByAparencia(id)
        return res.status(200).json(Types)
    }

    async Update(req:Request, res: Response){
        const {id, type, user_id} = req.body
        const Types = await service.UpdateType({id, type, user_id})
        return res.status(200).json(Types)
    }

    async Create(req:Request, res: Response){
        const {user_id, type} = req.body
        const Types = await service.createService({user_id, type})

        return res.status(201).json(Types)
    }

    async Delete(req:Request, res: Response){
        const {id} = req.params
        const Types = await service.Delete(id)
        return res.status(204).json(Types)
    }
}export {AparenciaController}