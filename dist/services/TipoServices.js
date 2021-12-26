"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoServices = void 0;
const typeorm_1 = require("typeorm");
const TipoRepositories_1 = require("../Repositories/TipoRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class TipoServices {
    async ListType() {
        const TypeRepositories = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        const type = await TypeRepositories.find();
        const types = type.map(t => t);
        return types;
    }
    async FindByType(id) {
        const TypeRepositories = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        const type = await TypeRepositories.findOneOrFail(id);
        return type;
    }
    async createService({ user_id, type }) {
        const TypeRepositories = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
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
        const TypeRepositories = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        //const userVerify = await this.FindById(id)
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
        const TypeRepositories = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        await TypeRepositories.delete(id);
        return "Eliminado";
    }
}
exports.TipoServices = TipoServices;
