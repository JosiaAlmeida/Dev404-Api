"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteController = void 0;
const PacoteServices_1 = require("../services/PacoteServices");
const service = new PacoteServices_1.PacoteServices();
class PacoteController {
    async ListAll(req, res) {
        const Pacotes = await service.ListPacote();
        return res.status(200).json(Pacotes);
    }
    async FindByPacote(req, res) {
        const { id } = req.params;
        const Pacotes = await service.FindByPacote(id);
        return res.status(200).json(Pacotes);
    }
    async UpdatePacote(req, res) {
        const { id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body;
        const { user_id } = req;
        const Pacotes = await service.UpdateType({ id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
        return res.status(200).json(Pacotes);
    }
    async CreatePacote(req, res) {
        const { name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body;
        const { user_id } = req;
        const Pacotes = await service.createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
        return res.status(201).json(Pacotes);
    }
    async DeletePacote(req, res) {
        const { id } = req.params;
        const Pacotes = await service.Delete(id);
        return res.status(204).json(Pacotes);
    }
}
exports.PacoteController = PacoteController;
