"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoController_1 = __importDefault(require("../controllers/TipoController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerType = (0, express_1.Router)();
const Type = new TipoController_1.default();
routerType.get('/', ensuredUser_1.ensuredUser, Type.ListAll);
routerType.get('/:id', ensuredUser_1.ensuredUser, Type.FindByType);
routerType.put('/', ensuredUser_1.ensuredUser, Type.UpdateType);
routerType.post('/', ensuredUser_1.ensuredUser, Type.CreateType);
routerType.delete('/:id', ensuredUser_1.ensuredUser, Type.DeleteType);
exports.default = routerType;
//# sourceMappingURL=tipeRoutes.js.map