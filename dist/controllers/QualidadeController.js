"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualidadeController = void 0;
const QualidadeServices_1 = require("../services/QualidadeServices");
const service = new QualidadeServices_1.QualidadeServices();
class QualidadeController {
    async ListAll(req, res) {
        const Qualidades = await service.ListQualidade();
        return res.status(200).json(Qualidades);
    }
    async FindByQualidade(req, res) {
        const { id } = req.params;
        const Qualidades = await service.FindByQualidade(id);
        return res.status(200).json(Qualidades);
    }
    async UpdateQualidade(req, res) {
        const { id, type } = req.body;
        const { user_id } = req;
        const Qualidades = await service.UpdateType({ id, type, user_id });
        return res.status(200).json(Qualidades);
    }
    async CreateQualidade(req, res) {
        const { type } = req.body;
        const { user_id } = req;
        const Qualidades = await service.createService({ user_id, type });
        return res.status(201).json(Qualidades);
    }
    async DeleteQualidade(req, res) {
        const { id } = req.params;
        const Qualidades = await service.Delete(id);
        return res.status(204).json(Qualidades);
    }
}
exports.QualidadeController = QualidadeController;
