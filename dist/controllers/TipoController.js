"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoServices_1 = __importDefault(require("../services/TipoServices"));
const service = new TipoServices_1.default();
class TipoController {
    async ListAll(req, res) {
        const Types = await service.ListType();
        return res.status(200).json(Types);
    }
    async FindByType(req, res) {
        const { id } = req.params;
        const Types = await service.FindByType(id);
        return res.status(200).json(Types);
    }
    async UpdateType(req, res) {
        const { id, type } = req.body;
        const { user_id } = req;
        const Types = await service.UpdateType({ id, type, user_id });
        return res.status(200).json(Types);
    }
    async CreateType(req, res) {
        const { type } = req.body;
        const { user_id } = req;
        const Types = await service.createService({ user_id, type });
        return res.status(201).json(Types);
    }
    async DeleteType(req, res) {
        const { id } = req.params;
        const Types = await service.Delete(id);
        return res.status(204).json(Types);
    }
}
exports.default = TipoController;
//# sourceMappingURL=TipoController.js.map