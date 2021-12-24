import { Request, Response } from "express";
import { QualidadeServices } from "../services/QualidadeServices";

const service = new QualidadeServices()

class QualidadeController{
    async ListAll(req:Request, res: Response){
        const Qualidades = await service.ListQualidade()
        return res.status(200).json(Qualidades)
    }

    async FindByQualidade(req:Request, res: Response){
        const {id} = req.params
        const Qualidades = await service.FindByQualidade(id)
        return res.status(200).json(Qualidades)
    }

    async UpdateQualidade(req:Request, res: Response){
        const {id, type} = req.body
        const {user_id} = req
        const Qualidades = await service.UpdateType({id, type, user_id})
        return res.status(200).json(Qualidades)
    }

    async CreateQualidade(req:Request, res: Response){
        const {type} = req.body
        const {user_id} = req
        const Qualidades = await service.createService({user_id, type})

        return res.status(201).json(Qualidades)
    }

    async DeleteQualidade(req:Request, res: Response){
        const {id} = req.params
        const Qualidades = await service.Delete(id)
        return res.status(204).json(Qualidades)
    }
}export {QualidadeController}