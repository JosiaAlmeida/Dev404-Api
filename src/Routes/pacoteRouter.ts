import { Router } from "express";
import { PacoteController } from "../controllers/PacoteController";
import { ensuredUser } from "../middleware/ensuredUser";

const routerPacote = Router()

const Pacote = new PacoteController()

routerPacote.get('/',ensuredUser, Pacote.ListAll)
routerPacote.get('/:id',ensuredUser, Pacote.FindByPacote)

routerPacote.put('/',ensuredUser, Pacote.UpdatePacote)

routerPacote.post('/',ensuredUser, Pacote.CreatePacote)

routerPacote.delete('/:id',ensuredUser, Pacote.DeletePacote)

export {routerPacote}