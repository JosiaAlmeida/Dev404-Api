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
const UserRepositories_1 = require("../Repositories/UserRepositories");
class UserServices {
    AllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositories = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
            const findUsers = yield userRepositories.find();
            const Users = findUsers.map((user) => user);
            return Users;
        });
    }
    FindById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositories = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
            const userVerify = yield userRepositories.findOne({ id });
            return userVerify;
        });
    }
    CreateUser({ name, Bi, sexo, empresa, organizacao, historia, email, number, Dev }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositories = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
            const userVerify = yield userRepositories.findOne({ email });
            if (!userVerify) {
                const user = userRepositories.create({
                    name,
                    Bi,
                    sexo,
                    empresa,
                    organizacao,
                    historia,
                    email,
                    number,
                    Dev
                });
                yield userRepositories.save(user);
                return user;
            }
        });
    }
    UpdateUser(id, { name, Bi, sexo, empresa, organizacao, historia, email, number, Dev }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositories = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
            const userExists = yield userRepositories.findOne(id);
            if (userExists) {
                const userUpdate = userRepositories.update(id, {
                    name,
                    Bi,
                    sexo,
                    empresa,
                    organizacao,
                    historia,
                    email,
                    number,
                    Dev
                });
                return userUpdate;
            }
        });
    }
    DistroyUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositories = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
            const user = yield this.FindById(id);
            if (user) {
                yield userRepositories.delete(id);
                return "Ok";
            }
            else
                return "User inexistente";
        });
    }
}
module.exports = UserServices;
//# sourceMappingURL=UserServices.js.map