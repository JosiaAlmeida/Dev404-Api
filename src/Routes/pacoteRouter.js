"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPacote = void 0;
const express_1 = require("express");
const PacoteController_1 = require("../controllers/PacoteController");
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerPacote = (0, express_1.Router)();
exports.routerPacote = routerPacote;
const Pacote = new PacoteController_1.PacoteController();
routerPacote.get('/', Pacote.ListAll);
routerPacote.get('/:id', Pacote.FindByPacote);
routerPacote.put('/', ensuredUser_1.ensuredUser, Pacote.UpdatePacote);
routerPacote.post('/', ensuredUser_1.ensuredUser, Pacote.CreatePacote);
routerPacote.delete('/:id', ensuredUser_1.ensuredUser, Pacote.DeletePacote);
