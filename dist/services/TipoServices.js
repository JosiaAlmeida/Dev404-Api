"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const TipoRepositories_1 = __importDefault(require("../Repositories/TipoRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class TipoServices {
    async ListType() {
        const TypeRepositories = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        const type = await TypeRepositories.find();
        const types = type.map(t => t);
        return types;
    }
    async FindByType(id) {
        const TypeRepositories = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        const type = await TypeRepositories.findOneOrFail(id);
        return type;
    }
    async createService({ user_id, type }) {
        const TypeRepositories = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        console.log(userExists);
        if (userExists.Dev != "Admin") {
            const Type = TypeRepositories.create({ user_id, type });
            await TypeRepositories.save(Type);
            return { Type, userExists };
        }
        else {
            return "Usuario inexistente\Tipo Existente";
        }
    }
    async UpdateType({ id, type, user_id }) {
        const TypeRepositories = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        const userExists = await TypeRepositories.findOne(id);
        if (userExists) {
            const TypeUpdate = TypeRepositories.update(id, {
                user_id,
                type
            });
            return TypeUpdate;
        }
    }
    async Delete(id) {
        const TypeRepositories = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        await TypeRepositories.delete(id);
        return "Eliminado";
    }
}
exports.default = TipoServices;
//# sourceMappingURL=TipoServices.js.map