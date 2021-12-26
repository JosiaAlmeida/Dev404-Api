"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoServices = void 0;
const typeorm_1 = require("typeorm");
const ObjetivoRepositories_1 = require("../Repositories/ObjetivoRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class ObjetivoServices {
    async ListObjetivo() {
        const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        const Objetivo = await objetivoRepositories.find();
        const Objetivos = Objetivo.map(t => t);
        return Objetivos;
    }
    async FindByObjetivo(id) {
        const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        const Objetivo = await objetivoRepositories.findOneOrFail(id);
        return Objetivo;
    }
    async createService({ user_id, type }) {
        const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOne(user_id);
        //const ObjetivoExists = await ObjetivoRepositories.findOneOrFail({
        //   Objetivo: Objetivo
        //})
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
        const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        //const userVerify = await this.FindById(id)
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
        const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        await objetivoRepositories.delete(id);
        return "Eliminado";
    }
}
exports.ObjetivoServices = ObjetivoServices;
