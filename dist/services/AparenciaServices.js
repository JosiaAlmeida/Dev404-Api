"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AparenciaServices = void 0;
const typeorm_1 = require("typeorm");
const AparenciaRepositories_1 = require("../Repositories/AparenciaRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class AparenciaServices {
    ListAparencia() {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
            const Aparencia = yield aparenciaRepositories.find();
            const Aparencias = Aparencia.map(t => t);
            return Aparencias;
        });
    }
    FindByAparencia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
            const Aparencia = yield aparenciaRepositories.findOneOrFail(id);
            return Aparencia;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            if (userExists) {
                const Aparencia = aparenciaRepositories.create({ user_id, type });
                yield aparenciaRepositories.save(Aparencia);
                return { Aparencia, userExists };
            }
            else {
                return "Usuario inexistente\Aparencia Existente";
            }
        });
    }
    UpdateType({ id, type, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
            //const userVerify = await this.FindById(id)
            const userExists = yield aparenciaRepositories.findOne(id);
            if (userExists) {
                const AparenciaUpdate = aparenciaRepositories.update(id, {
                    user_id,
                    type
                });
                return AparenciaUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
            yield aparenciaRepositories.delete(id);
            return "Eliminado";
        });
    }
}
exports.AparenciaServices = AparenciaServices;
