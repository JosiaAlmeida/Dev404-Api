"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObjetivoServices_1 = __importDefault(require("../services/ObjetivoServices"));
const service = new ObjetivoServices_1.default();
class ObjetivoController {
    async ListAll(req, res) {
        const Types = await service.ListObjetivo();
        return res.status(200).json(Types);
    }
    async FindByType(req, res) {
        const { id } = req.params;
        const Types = await service.FindByObjetivo(id);
        return res.status(200).json(Types);
    }
    async Update(req, res) {
        const { id, type } = req.body;
        const { user_id } = req;
        const Types = await service.UpdateType({ id, type, user_id });
        return res.status(200).json(Types);
    }
    async Create(req, res) {
        const { type } = req.body;
        const { user_id } = req;
        const Types = await service.createService({ user_id, type });
        return res.status(201).json(Types);
    }
    async Delete(req, res) {
        const { id } = req.params;
        const Types = await service.Delete(id);
        return res.status(204).json(Types);
    }
}
exports.default = ObjetivoController;
//# sourceMappingURL=ObjetivoController.js.map