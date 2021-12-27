"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ObjetivoController_1 = __importDefault(require("../controllers/ObjetivoController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerObjetivo = (0, express_1.Router)();
const Objetivo = new ObjetivoController_1.default();
routerObjetivo.get('/', ensuredUser_1.ensuredUser, Objetivo.ListAll);
routerObjetivo.get('/:id', ensuredUser_1.ensuredUser, Objetivo.FindByType);
routerObjetivo.put('/', ensuredUser_1.ensuredUser, Objetivo.Update);
routerObjetivo.post('/', ensuredUser_1.ensuredUser, Objetivo.Create);
routerObjetivo.delete('/:id', ensuredUser_1.ensuredUser, Objetivo.Delete);
exports.default = routerObjetivo;
//# sourceMappingURL=objetivo.js.map