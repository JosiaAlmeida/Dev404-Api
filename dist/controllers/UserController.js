"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices = require("../services/UserServices");
const service = new UserServices();
class UserController {
    async ListUser(req, res) {
        const Users = await service.AllUser();
        return res.status(200).json(Users);
    }
    async FindById(req, res) {
        const { id } = req.params;
        const userUpdate = await service.FindById(id);
        return res.status(200).json(userUpdate);
    }
    async createUser(req, res) {
        const { name, Bi, sexo, empresa, organizacao, historia, email, number, Dev } = req.body;
        const user = await service.CreateUser({
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
    }
    async Update(req, res) {
        const { id, name, Bi, sexo, empresa, organizacao, historia, email, number, Dev } = req.body;
        const userUpdate = await service.UpdateUser(id, {
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
    }
    async DeleteUser(req, res) {
        const { id } = req.params;
        const User = await service.DistroyUser(id);
        return res.status(204).json(User);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map