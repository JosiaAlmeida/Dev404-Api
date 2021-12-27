"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const PacoteRepositories_1 = __importDefault(require("../Repositories/PacoteRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class PacoteServices {
    async ListPacote() {
        const pacoteRepositories = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        const Pacote = await pacoteRepositories.find();
        const Pacotes = Pacote.map(t => t);
        return Pacotes;
    }
    async FindByPacote(id) {
        const pacoteRepositories = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        const Pacote = await pacoteRepositories.findOneOrFail(id);
        return Pacote;
    }
    async createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        const pacoteRepositories = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        console.log(userExists);
        if (userExists) {
            const Pacote = pacoteRepositories.create({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
            await pacoteRepositories.save(Pacote);
            return { Pacote, userExists };
        }
        else {
            return "Usuario inexistente\Pacote Existente";
        }
    }
    async UpdateType({ id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        const pacoteRepositories = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        const userExists = await pacoteRepositories.findOne(id);
        if (userExists) {
            const PacoteUpdate = pacoteRepositories.update(id, { user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
            return PacoteUpdate;
        }
    }
    async Delete(id) {
        const pacoteRepositories = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        await pacoteRepositories.delete(id);
        return "Eliminado";
    }
}
exports.default = PacoteServices;
//# sourceMappingURL=PacoteServices.js.map