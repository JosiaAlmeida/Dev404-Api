import { Router } from "express";
import { QualidadeController } from "../controllers/QualidadeController";

const routerQualidade = Router()

const Qualidade = new QualidadeController()

routerQualidade.get('/', Qualidade.ListAll)
routerQualidade.get('/:id', Qualidade.FindByQualidade)

routerQualidade.put('/', Qualidade.UpdateQualidade)

routerQualidade.post('/', Qualidade.CreateQualidade)

routerQualidade.delete('/:id', Qualidade.DeleteQualidade)

export {routerQualidade}