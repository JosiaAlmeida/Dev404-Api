"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteServices = void 0;
const typeorm_1 = require("typeorm");
const PacoteRepositories_1 = require("../Repositories/PacoteRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class PacoteServices {
    ListPacote() {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
            const Pacote = yield pacoteRepositories.find();
            const Pacotes = Pacote.map(t => t);
            return Pacotes;
        });
    }
    FindByPacote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
            const Pacote = yield pacoteRepositories.findOneOrFail(id);
            return Pacote;
        });
    }
    createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            console.log(userExists);
            if (userExists) {
                const Pacote = pacoteRepositories.create({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
                yield pacoteRepositories.save(Pacote);
                return { Pacote, userExists };
            }
            else {
                return "Usuario inexistente\Pacote Existente";
            }
        });
    }
    UpdateType({ id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
            //const userVerify = await this.FindById(id)
            const userExists = yield pacoteRepositories.findOne(id);
            if (userExists) {
                const PacoteUpdate = pacoteRepositories.update(id, { user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
                return PacoteUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
            yield pacoteRepositories.delete(id);
            return "Eliminado";
        });
    }
}
exports.PacoteServices = PacoteServices;
