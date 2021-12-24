import { Router } from "express";
import { AparenciaController } from "../controllers/AparenciaController";
import { ensuredUser } from "../middleware/ensuredUser";

const routerAparencia = Router()

const Aparencia = new AparenciaController()

routerAparencia.get('/',ensuredUser, Aparencia.ListAll)
routerAparencia.get('/:id',ensuredUser, Aparencia.FindBy)

routerAparencia.put('/',ensuredUser, Aparencia.Update)

routerAparencia.post('/',ensuredUser, Aparencia.Create)

routerAparencia.delete('/:id',ensuredUser, Aparencia.Delete)

export {routerAparencia}