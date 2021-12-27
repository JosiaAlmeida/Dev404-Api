"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacoteController_1 = __importDefault(require("../controllers/PacoteController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerPacote = (0, express_1.Router)();
const Pacote = new PacoteController_1.default();
routerPacote.get('/', Pacote.ListAll);
routerPacote.get('/:id', Pacote.FindByPacote);
routerPacote.put('/', ensuredUser_1.ensuredUser, Pacote.UpdatePacote);
routerPacote.post('/', ensuredUser_1.ensuredUser, Pacote.CreatePacote);
routerPacote.delete('/:id', ensuredUser_1.ensuredUser, Pacote.DeletePacote);
exports.default = routerPacote;
//# sourceMappingURL=pacoteRouter.js.map