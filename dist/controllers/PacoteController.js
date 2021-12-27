var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PacoteServices from "../services/PacoteServices";
const service = new PacoteServices();
export default class PacoteController {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Pacotes = yield service.ListPacote();
            return res.status(200).json(Pacotes);
        });
    }
    FindByPacote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Pacotes = yield service.FindByPacote(id);
            return res.status(200).json(Pacotes);
        });
    }
    UpdatePacote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body;
            const { user_id } = req;
            const Pacotes = yield service.UpdateType({ id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
            return res.status(200).json(Pacotes);
        });
    }
    CreatePacote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado } = req.body;
            const { user_id } = req;
            const Pacotes = yield service.createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
            return res.status(201).json(Pacotes);
        });
    }
    DeletePacote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Pacotes = yield service.Delete(id);
            return res.status(204).json(Pacotes);
        });
    }
}
//# sourceMappingURL=PacoteController.js.map