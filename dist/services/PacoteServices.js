var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TypeORM from 'typeorm';
import PacoteRepositories from '../Repositories/PacoteRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';
export default class PacoteServices {
    ListPacote() {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories);
            const Pacote = yield pacoteRepositories.find();
            const Pacotes = Pacote.map(t => t);
            return Pacotes;
        });
    }
    FindByPacote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories);
            const Pacote = yield pacoteRepositories.findOneOrFail(id);
            return Pacote;
        });
    }
    createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories);
            const userRepository = TypeORM.getCustomRepository(UserRepositories);
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
            const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories);
            const userExists = yield pacoteRepositories.findOne(id);
            if (userExists) {
                const PacoteUpdate = pacoteRepositories.update(id, { user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado });
                return PacoteUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories);
            yield pacoteRepositories.delete(id);
            return "Eliminado";
        });
    }
}
//# sourceMappingURL=PacoteServices.js.map