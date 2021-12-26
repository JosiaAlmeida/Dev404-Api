"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AparenciaServices = void 0;
const typeorm_1 = require("typeorm");
const AparenciaRepositories_1 = require("../Repositories/AparenciaRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class AparenciaServices {
    async ListAparencia() {
        const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        const Aparencia = await aparenciaRepositories.find();
        const Aparencias = Aparencia.map(t => t);
        return Aparencias;
    }
    async FindByAparencia(id) {
        const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        const Aparencia = await aparenciaRepositories.findOneOrFail(id);
        return Aparencia;
    }
    async createService({ user_id, type }) {
        const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
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
        const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        //const userVerify = await this.FindById(id)
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
        const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        await aparenciaRepositories.delete(id);
        return "Eliminado";
    }
}
exports.AparenciaServices = AparenciaServices;
