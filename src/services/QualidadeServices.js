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
exports.QualidadeServices = void 0;
const typeorm_1 = require("typeorm");
const QualidadeRepositories_1 = require("../Repositories/QualidadeRepositories");
const SuperUserRepositories_1 = require("../Repositories/SuperUserRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class QualidadeServices {
    ListQualidade() {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
            const Qualidade = yield qualidadeRepositories.find();
            const Qualidades = Qualidade.map(t => t);
            return Qualidades;
        });
    }
    FindByQualidade(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
            const Qualidade = yield qualidadeRepositories.findOneOrFail(id);
            return Qualidade;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
            const userExists = yield userRepository.findOne(user_id);
            const superUserAdmin = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
            console.log(userExists);
            if (userExists.Dev != "null") {
                const qualidade = qualidadeRepositories.create({ user_id, type });
                yield qualidadeRepositories.save(qualidade);
                return { qualidade, userExists };
            }
            else {
                return "Usuario inexistente\Qualidade Existente";
            }
        });
    }
    UpdateType({ id, type, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
            //const userVerify = await this.FindById(id)
            const userExists = yield qualidadeRepositories.findOne(id);
            if (userExists) {
                const qualidadeUpdate = qualidadeRepositories.update(id, {
                    user_id,
                    type
                });
                return qualidadeUpdate;
            }
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualidadeRepositories = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
            yield qualidadeRepositories.delete(id);
            return "Eliminado";
        });
    }
}
exports.QualidadeServices = QualidadeServices;
