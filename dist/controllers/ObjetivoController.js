"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoController = void 0;
const ObjetivoServices_1 = require("../services/ObjetivoServices");
const service = new ObjetivoServices_1.ObjetivoServices();
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
exports.ObjetivoController = ObjetivoController;
