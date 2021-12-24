import { Router } from "express";
import { TipoController } from "../controllers/TipoController";

const routerType = Router()

const Type = new TipoController()

routerType.get('/', Type.ListAll)
routerType.get('/:id', Type.FindByType)

routerType.put('/', Type.UpdateType)

routerType.post('/', Type.CreateType)

routerType.delete('/:id', Type.DeleteType)

export {routerType}