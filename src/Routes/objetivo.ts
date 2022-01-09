import { Router } from "express";
import ObjetivoController from "../controllers/ObjetivoController";
import { ensuredUser } from "../middleware/ensuredUser";

const routerObjetivo = Router()

const Objetivo = new ObjetivoController()

routerObjetivo.get('/',ensuredUser, Objetivo.ListAll)
routerObjetivo.get('/:id',ensuredUser, Objetivo.FindByType)

routerObjetivo.put('/',ensuredUser, Objetivo.Update)

routerObjetivo.post('/',ensuredUser, Objetivo.Create)

routerObjetivo.delete('/:id',ensuredUser, Objetivo.Delete)

export default routerObjetivo