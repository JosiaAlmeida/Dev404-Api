"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const QualidadeRepositories_1 = __importDefault(require("../Repositories/QualidadeRepositories"));
const SuperUserRepositories_1 = __importDefault(require("../Repositories/SuperUserRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class QualidadeServices {
    async ListQualidade() {
        const qualidadeRepositories = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        const Qualidade = await qualidadeRepositories.find();
        const Qualidades = Qualidade.map(t => t);
        return Qualidades;
    }
    async FindByQualidade(id) {
        const qualidadeRepositories = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        const Qualidade = await qualidadeRepositories.findOneOrFail(id);
        return Qualidade;
    }
    async createService({ user_id, type }) {
        const qualidadeRepositories = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        const superUserAdmin = typeorm_1.default.getCustomRepository(SuperUserRepositories_1.default);
        console.log(userExists);
        if (userExists.Dev != "null") {
            const qualidade = qualidadeRepositories.create({ user_id, type });
            await qualidadeRepositories.save(qualidade);
            return { qualidade, userExists };
        }
        else {
            return "Usuario inexistente\Qualidade Existente";
        }
    }
    async UpdateType({ id, type, user_id }) {
        const qualidadeRepositories = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        const userExists = await qualidadeRepositories.findOne(id);
        if (userExists) {
            const qualidadeUpdate = qualidadeRepositories.update(id, {
                user_id,
                type
            });
            return qualidadeUpdate;
        }
    }
    async Delete(id) {
        const qualidadeRepositories = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        await qualidadeRepositories.delete(id);
        return "Eliminado";
    }
}
exports.default = QualidadeServices;
//# sourceMappingURL=QualidadeServices.js.map