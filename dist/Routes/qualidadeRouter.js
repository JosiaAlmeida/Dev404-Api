"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QualidadeController_1 = __importDefault(require("../controllers/QualidadeController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerQualidade = (0, express_1.Router)();
const Qualidade = new QualidadeController_1.default();
routerQualidade.get('/', ensuredUser_1.ensuredUser, Qualidade.ListAll);
routerQualidade.get('/:id', ensuredUser_1.ensuredUser, Qualidade.FindByQualidade);
routerQualidade.put('/', ensuredUser_1.ensuredUser, Qualidade.UpdateQualidade);
routerQualidade.post('/', ensuredUser_1.ensuredUser, Qualidade.CreateQualidade);
routerQualidade.delete('/:id', ensuredUser_1.ensuredUser, Qualidade.DeleteQualidade);
exports.default = routerQualidade;
//# sourceMappingURL=qualidadeRouter.js.map