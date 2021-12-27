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
import QualidadeRepositories from '../Repositories/QualidadeRepositories';
import SuperUserRepositories from '../Repositories/SuperUserRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';
export default class QualidadeServices {
    ListQualidade() {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = TypeORM.getCustomRepository(QualidadeRepositories);
            const Qualidade = yield qualidadeRepositories.find();
            const Qualidades = Qualidade.map(t => t);
            return Qualidades;
        });
    }
    FindByQualidade(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = TypeORM.getCustomRepository(QualidadeRepositories);
            const Qualidade = yield qualidadeRepositories.findOneOrFail(id);
            return Qualidade;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = TypeORM.getCustomRepository(QualidadeRepositories);
            const userRepository = TypeORM.getCustomRepository(UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            const superUserAdmin = TypeORM.getCustomRepository(SuperUserRepositories);
            console.log(userExists);
            if (userExists.Dev != "null") {
                const qualidade = qualidadeRepositories.create({ user_id, type });
                yield qualidadeRepositories.save(qualidade);
                return { qualidade, userExists };
            }
            else {
                return "Usuario inexistente\Qualidade Existente";
            }
        });
    }
    UpdateType({ id, type, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = TypeORM.getCustomRepository(QualidadeRepositories);
            const userExists = yield qualidadeRepositories.findOne(id);
            if (userExists) {
                const qualidadeUpdate = qualidadeRepositories.update(id, {
                    user_id,
                    type
                });
                return qualidadeUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = TypeORM.getCustomRepository(QualidadeRepositories);
            yield qualidadeRepositories.delete(id);
            return "Eliminado";
        });
    }
}
//# sourceMappingURL=QualidadeServices.js.map