"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const ensuredUser_1 = require("../middleware/ensuredUser");
const routerUser = (0, express_1.Router)();
const User = new UserController_1.default();
routerUser.get('/', ensuredUser_1.ensuredUser, User.ListUser);
routerUser.get('/:id', ensuredUser_1.ensuredUser, User.FindById);
routerUser.put('/', ensuredUser_1.ensuredUser, User.Update);
routerUser.post('/', User.createUser);
routerUser.delete('/delete/:id', ensuredUser_1.ensuredUser, User.DeleteUser);
exports.default = routerUser;
//# sourceMappingURL=userRoutes.js.map