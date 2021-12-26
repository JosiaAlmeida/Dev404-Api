"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsUserController = void 0;
const ActionsUserServices_1 = require("../services/ActionsUserServices");
class ActionsUserController {
    async handle(req, res) {
        const { email } = req.body;
        const ActionsUser = new ActionsUserServices_1.ActionsUserServices();
        const Action = await ActionsUser.execute(email);
        return res.json(Action);
    }
}
exports.ActionsUserController = ActionsUserController;
