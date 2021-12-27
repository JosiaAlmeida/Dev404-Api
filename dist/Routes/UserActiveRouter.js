"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActionsUserController_1 = __importDefault(require("../controllers/ActionsUserController"));
const UserOnlyNowController_1 = __importDefault(require("../controllers/UserOnlyNowController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routesUserActive = (0, express_1.Router)();
const userOnly = new UserOnlyNowController_1.default();
const ActionsUser = new ActionsUserController_1.default();
routesUserActive.post('/Actions', ensuredUser_1.ensuredUser, ActionsUser.handle);
routesUserActive.post('/', userOnly.handle);
routesUserActive.post('/admin/create', userOnly.CreateAdmin);
routesUserActive.post('/admin/login', userOnly.LoginAdmin);
exports.default = routesUserActive;
//# sourceMappingURL=UserActiveRouter.js.map