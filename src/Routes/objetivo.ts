import { Router } from "express";
import { ObjetivoController } from "../controllers/ObjetivoController";

const routerObjetivo = Router()

const Objetivo = new ObjetivoController()

routerObjetivo.get('/', Objetivo.ListAll)
routerObjetivo.get('/:id', Objetivo.FindByType)

routerObjetivo.put('/', Objetivo.Update)

routerObjetivo.post('/', Objetivo.Create)

routerObjetivo.delete('/:id', Objetivo.Delete)

export {routerObjetivo}