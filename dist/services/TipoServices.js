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
import TipoRepositories from '../Repositories/TipoRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';
export default class TipoServices {
    ListType() {
        return __awaiter(this, void 0, void 0, function* () {
            const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories);
            const type = yield TypeRepositories.find();
            const types = type.map(t => t);
            return types;
        });
    }
    FindByType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories);
            const type = yield TypeRepositories.findOneOrFail(id);
            return type;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories);
            const userRepository = TypeORM.getCustomRepository(UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            console.log(userExists);
            if (userExists.Dev != "Admin") {
                const Type = TypeRepositories.create({ user_id, type });
                yield TypeRepositories.save(Type);
                return { Type, userExists };
            }
            else {
                return "Usuario inexistente\Tipo Existente";
            }
        });
    }
    UpdateType({ id, type, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories);
            const userExists = yield TypeRepositories.findOne(id);
            if (userExists) {
                const TypeUpdate = TypeRepositories.update(id, {
                    user_id,
                    type
                });
                return TypeUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories);
            yield TypeRepositories.delete(id);
            return "Eliminado";
        });
    }
}
//# sourceMappingURL=TipoServices.js.map