"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const ObjetivoRepositories_1 = __importDefault(require("../Repositories/ObjetivoRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class ObjetivoServices {
    async ListObjetivo() {
        const objetivoRepositories = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        const Objetivo = await objetivoRepositories.find();
        const Objetivos = Objetivo.map(t => t);
        return Objetivos;
    }
    async FindByObjetivo(id) {
        const objetivoRepositories = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        const Objetivo = await objetivoRepositories.findOneOrFail(id);
        return Objetivo;
    }
    async createService({ user_id, type }) {
        const objetivoRepositories = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        console.log(userExists);
        if (userExists) {
            const Objetivo = objetivoRepositories.create({ user_id, type });
            await objetivoRepositories.save(Objetivo);
            return { Objetivo, userExists };
        }
        else {
            return "Usuario inexistente\Objetivo Existente";
        }
    }
    async UpdateType({ id, type, user_id }) {
        const objetivoRepositories = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        const userExists = await objetivoRepositories.findOne(id);
        if (userExists) {
            const ObjetivoUpdate = objetivoRepositories.update(id, {
                user_id,
                type
            });
            return ObjetivoUpdate;
        }
    }
    async Delete(id) {
        const objetivoRepositories = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        await objetivoRepositories.delete(id);
        return "Eliminado";
    }
}
exports.default = ObjetivoServices;
//# sourceMappingURL=ObjetivoServices.js.map