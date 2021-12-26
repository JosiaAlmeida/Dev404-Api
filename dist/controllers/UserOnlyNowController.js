"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOnlyNowController = void 0;
const UserOnlyNow_1 = require("../services/UserOnlyNow");
const userOnly = new UserOnlyNow_1.UserOnlyNow();
class UserOnlyNowController {
    async handle(req, res) {
        const { email } = req.body;
        const userActive = await userOnly.execute(email);
        return res.status(200).json(userActive);
    }
    async CreateAdmin(req, res) {
        const { email, password, superKyUser } = req.body;
        const Admin = await userOnly.CreateAdmin({ email, password, superKyUser });
        return res.status(201).json(Admin);
    }
    async LoginAdmin(req, res) {
        const { email, password, superKyUser } = req.body;
        const Admin = await userOnly.LoginAdmin({ email, password, superKyUser });
        return res.status(201).json(Admin);
    }
}
exports.UserOnlyNowController = UserOnlyNowController;
