import { Router } from "express";
import { TipoController } from "../controllers/TipoController";
import { ensuredAdmin } from "../middleware/ensuredAdmin";
import { ensuredUser } from "../middleware/ensuredUser";

const routerType = Router()

const Type = new TipoController()

routerType.get('/',ensuredUser, Type.ListAll)
routerType.get('/:id',ensuredUser, Type.FindByType)

routerType.put('/',ensuredUser, Type.UpdateType)

routerType.post('/',ensuredUser, Type.CreateType)

routerType.delete('/:id',ensuredUser, Type.DeleteType)

export {routerType}