"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AparenciaServices_1 = __importDefault(require("../services/AparenciaServices"));
const service = new AparenciaServices_1.default();
class AparenciaController {
    async ListAll(req, res) {
        const Types = await service.ListAparencia();
        return res.status(200).json(Types);
    }
    async FindBy(req, res) {
        const { id } = req.params;
        const Types = await service.FindByAparencia(id);
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
exports.default = AparenciaController;
//# sourceMappingURL=AparenciaController.js.map