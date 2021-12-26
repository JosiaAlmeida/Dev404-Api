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
exports.ObjetivoServices = void 0;
const typeorm_1 = require("typeorm");
const ObjetivoRepositories_1 = require("../Repositories/ObjetivoRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class ObjetivoServices {
    ListObjetivo() {
        return __awaiter(this, void 0, void 0, function* () {
            const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
            const Objetivo = yield objetivoRepositories.find();
            const Objetivos = Objetivo.map(t => t);
            return Objetivos;
        });
    }
    FindByObjetivo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
            const Objetivo = yield objetivoRepositories.findOneOrFail(id);
            return Objetivo;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            //const ObjetivoExists = await ObjetivoRepositories.findOneOrFail({
            //   Objetivo: Objetivo
            //})
            console.log(userExists);
            if (userExists) {
                const Objetivo = objetivoRepositories.create({ user_id, type });
                yield objetivoRepositories.save(Objetivo);
                return { Objetivo, userExists };
            }
            else {
                return "Usuario inexistente\Objetivo Existente";
            }
        });
    }
    UpdateType({ id, type, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
            //const userVerify = await this.FindById(id)
            const userExists = yield objetivoRepositories.findOne(id);
            if (userExists) {
                const ObjetivoUpdate = objetivoRepositories.update(id, {
                    user_id,
                    type
                });
                return ObjetivoUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const objetivoRepositories = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
            yield objetivoRepositories.delete(id);
            return "Eliminado";
        });
    }
}
exports.ObjetivoServices = ObjetivoServices;
