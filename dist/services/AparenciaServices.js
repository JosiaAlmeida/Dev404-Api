"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const AparenciaRepositories_1 = __importDefault(require("../Repositories/AparenciaRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class AparenciaServices {
    async ListAparencia() {
        const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        const Aparencia = await aparenciaRepositories.find();
        const Aparencias = Aparencia.map(t => t);
        return Aparencias;
    }
    async FindByAparencia(id) {
        const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        const Aparencia = await aparenciaRepositories.findOneOrFail(id);
        return Aparencia;
    }
    async createService({ user_id, type }) {
        const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        if (userExists) {
            const Aparencia = aparenciaRepositories.create({ user_id, type });
            await aparenciaRepositories.save(Aparencia);
            return { Aparencia, userExists };
        }
        else {
            return "Usuario inexistente\Aparencia Existente";
        }
    }
    async UpdateType({ id, type, user_id }) {
        const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        const userExists = await aparenciaRepositories.findOne(id);
        if (userExists) {
            const AparenciaUpdate = aparenciaRepositories.update(id, {
                user_id,
                type
            });
            return AparenciaUpdate;
        }
    }
    async Delete(id) {
        const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        await aparenciaRepositories.delete(id);
        return "Eliminado";
    }
}
exports.default = AparenciaServices;
//# sourceMappingURL=AparenciaServices.js.map