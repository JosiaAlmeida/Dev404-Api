"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AparenciaController_1 = __importDefault(require("../controllers/AparenciaController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerAparencia = (0, express_1.Router)();
const Aparencia = new AparenciaController_1.default();
routerAparencia.get('/', ensuredUser_1.ensuredUser, Aparencia.ListAll);
routerAparencia.get('/:id', ensuredUser_1.ensuredUser, Aparencia.FindBy);
routerAparencia.put('/', ensuredUser_1.ensuredUser, Aparencia.Update);
routerAparencia.post('/', ensuredUser_1.ensuredUser, Aparencia.Create);
routerAparencia.delete('/:id', ensuredUser_1.ensuredUser, Aparencia.Delete);
exports.default = routerAparencia;
//# sourceMappingURL=aparenciaRouter.js.map