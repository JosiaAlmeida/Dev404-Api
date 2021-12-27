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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const AparenciaRepositories_1 = __importDefault(require("../Repositories/AparenciaRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
class AparenciaServices {
    ListAparencia() {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
            const Aparencia = yield aparenciaRepositories.find();
            const Aparencias = Aparencia.map(t => t);
            return Aparencias;
        });
    }
    FindByAparencia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
            const Aparencia = yield aparenciaRepositories.findOneOrFail(id);
            return Aparencia;
        });
    }
    createService({ user_id, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
            const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
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
            const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
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
            const aparenciaRepositories = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
            yield aparenciaRepositories.delete(id);
            return "Eliminado";
        });
    }
}
exports.default = AparenciaServices;
//# sourceMappingURL=AparenciaServices.js.map