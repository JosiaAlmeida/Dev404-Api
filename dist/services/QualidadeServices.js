"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualidadeServices = void 0;
const typeorm_1 = require("typeorm");
const QualidadeRepositories_1 = require("../Repositories/QualidadeRepositories");
const SuperUserRepositories_1 = require("../Repositories/SuperUserRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class QualidadeServices {
    async ListQualidade() {
        const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        const Qualidade = await qualidadeRepositories.find();
        const Qualidades = Qualidade.map(t => t);
        return Qualidades;
    }
    async FindByQualidade(id) {
        const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        const Qualidade = await qualidadeRepositories.findOneOrFail(id);
        return Qualidade;
    }
    async createService({ user_id, type }) {
        const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        const superUserAdmin = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
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
        const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        //const userVerify = await this.FindById(id)
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
        const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        await qualidadeRepositories.delete(id);
        return "Eliminado";
    }
}
exports.QualidadeServices = QualidadeServices;
