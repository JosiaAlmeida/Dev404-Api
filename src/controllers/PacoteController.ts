import { Request, Response } from "express";
import { PacoteServices } from "../services/PacoteServices";

const service = new PacoteServices()

class PacoteController{
    async ListAll(req:Request, res: Response){
        const Pacotes = await service.ListPacote()
        return res.status(200).json(Pacotes)
    }

    async FindByPacote(req:Request, res: Response){
        const {id} = req.params
        const Pacotes = await service.FindByPacote(id)
        return res.status(200).json(Pacotes)
    }

    async UpdatePacote(req:Request, res: Response){
        const {id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body
        const Pacotes = await service.UpdateType({id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado })
        return res.status(200).json(Pacotes)
    }

    async CreatePacote(req:Request, res: Response){
        const {user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body
        const Pacotes = await service.createService({user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado })

        return res.status(201).json(Pacotes)
    }

    async DeletePacote(req:Request, res: Response){
        const {id} = req.params
        const Pacotes = await service.Delete(id)
        return res.status(204).json(Pacotes)
    }
}export {PacoteController}