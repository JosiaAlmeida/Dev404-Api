import { Router } from "express";
import { QualidadeController } from "../controllers/QualidadeController";
import { ensuredUser } from "../middleware/ensuredUser";

const routerQualidade = Router()

const Qualidade = new QualidadeController()


routerQualidade.get('/',ensuredUser ,Qualidade.ListAll)
routerQualidade.get('/:id',ensuredUser, Qualidade.FindByQualidade)

routerQualidade.put('/',ensuredUser, Qualidade.UpdateQualidade)

routerQualidade.post('/',ensuredUser, Qualidade.CreateQualidade)

routerQualidade.delete('/:id',ensuredUser, Qualidade.DeleteQualidade)

export {routerQualidade}