import { Router } from "express";
import { AparenciaController } from "../controllers/AparenciaController";

const routerAparencia = Router()

const Aparencia = new AparenciaController()

routerAparencia.get('/', Aparencia.ListAll)
routerAparencia.get('/:id', Aparencia.FindBy)

routerAparencia.put('/', Aparencia.Update)

routerAparencia.post('/', Aparencia.Create)

routerAparencia.delete('/:id', Aparencia.Delete)

export {routerAparencia}