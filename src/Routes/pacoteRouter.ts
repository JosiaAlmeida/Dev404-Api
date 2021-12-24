import { Router } from "express";
import { PacoteController } from "../controllers/PacoteController";

const routerPacote = Router()

const Pacote = new PacoteController()

routerPacote.get('/', Pacote.ListAll)
routerPacote.get('/:id', Pacote.FindByPacote)

routerPacote.put('/', Pacote.UpdatePacote)

routerPacote.post('/', Pacote.CreatePacote)

routerPacote.delete('/:id', Pacote.DeletePacote)

export {routerPacote}