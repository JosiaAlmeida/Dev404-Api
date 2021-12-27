"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserOnlyNow_1 = __importDefault(require("../services/UserOnlyNow"));
const userOnly = new UserOnlyNow_1.default();
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
exports.default = UserOnlyNowController;
//# sourceMappingURL=UserOnlyNowController.js.map