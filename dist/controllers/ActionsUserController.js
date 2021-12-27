"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionsUserServices_1 = __importDefault(require("../services/ActionsUserServices"));
class ActionsUserController {
    async handle(req, res) {
        const { email } = req.body;
        const ActionsUser = new ActionsUserServices_1.default();
        const Action = await ActionsUser.execute(email);
        return res.json(Action);
    }
}
exports.default = ActionsUserController;
//# sourceMappingURL=ActionsUserController.js.map