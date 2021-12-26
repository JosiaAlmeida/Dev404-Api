"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserServices_1 = require("../services/UserServices");
const service = new UserServices_1.UserServices();
class UserController {
    ListUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Users = yield service.AllUser();
            return res.status(200).json(Users);
        });
    }
    FindById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userUpdate = yield service.FindById(id);
            return res.status(200).json(userUpdate);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, Bi, sexo, empresa, organizacao, historia, email, number, Dev } = req.body;
            const user = yield service.CreateUser({
                name,
                Bi,
                sexo,
                empresa,
                organizacao,
                historia,
                email,
                number,
                Dev
            });
            return res.status(201).json(user);
        });
    }
    Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, Bi, sexo, empresa, organizacao, historia, email, number, Dev } = req.body;
            const userUpdate = yield service.UpdateUser(id, {
                name,
                Bi,
                sexo,
                empresa,
                organizacao,
                historia,
                email,
                number,
                Dev
            });
            return res.status(200).json(userUpdate);
        });
    }
    DeleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const User = yield service.DistroyUser(id);
            return res.status(204).json(User);
        });
    }
}
exports.UserController = UserController;
