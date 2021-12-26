"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteServices = void 0;
const typeorm_1 = require("typeorm");
const PacoteRepositories_1 = require("../Repositories/PacoteRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class PacoteServices {
    async ListPacote() {
        const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        const Pacote = await pacoteRepositories.find();
        const Pacotes = Pacote.map(t => t);
        return Pacotes;
    }
    async FindByPacote(id) {
        const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        const Pacote = await pacoteRepositories.findOneOrFail(id);
        return Pacote;
    }
    async createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
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
        const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        //const userVerify = await this.FindById(id)
        const userExists = await pacoteRepositories.findOne(id);
        if (userExists) {
            const PacoteUpdate = pacoteRepositories.update(id, { user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
            return PacoteUpdate;
        }
    }
    async Delete(id) {
        const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        await pacoteRepositories.delete(id);
        return "Eliminado";
    }
}
exports.PacoteServices = PacoteServices;
