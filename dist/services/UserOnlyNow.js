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
exports.UserOnlyNow = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const UserRepositories_1 = require("../Repositories/UserRepositories");
const bcryptjs_1 = require("bcryptjs");
const SuperUserRepositories_1 = require("../Repositories/SuperUserRepositories");
const class_transformer_1 = require("class-transformer");
class UserOnlyNow {
    execute(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
            const userExists = yield userRepository.findOneOrFail({
                email
            });
            if (userExists.Dev === 'admin') {
                const token = (0, jsonwebtoken_1.sign)({
                    email: userExists.email
                }, process.env.JWT_KEY_ADMIN, {
                    subject: userExists.id,
                    expiresIn: "1d"
                });
                return { userExists, token };
            }
            else if (userExists) {
                const token = (0, jsonwebtoken_1.sign)({
                    email: userExists.email
                }, process.env.JWT_KEY, {
                    subject: userExists.id,
                    expiresIn: "1d"
                });
                return { userExists, token };
            }
        });
    }
    CreateAdmin({ email, password, superKyUser }) {
        return __awaiter(this, void 0, void 0, function* () {
            const AdminCreate = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
            if (superKyUser == process.env.Admin_Key) {
                const pass = yield (0, bcryptjs_1.hash)(password, 8);
                const Admin = AdminCreate.create({ email, password: pass, });
                yield AdminCreate.save(Admin);
                return (0, class_transformer_1.classToPlain)(Admin);
            }
        });
    }
    LoginAdmin({ email, password, superKyUser }) {
        return __awaiter(this, void 0, void 0, function* () {
            const AdminCreate = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
            const AdminExist = yield AdminCreate.findOne({ email });
            const pass = yield (0, bcryptjs_1.compare)(password, AdminExist.password);
            if (AdminExist) {
                if (superKyUser === process.env.Admin_Key) {
                    if (pass) {
                        const token = (0, jsonwebtoken_1.sign)({
                            email: AdminExist.email
                        }, process.env.JWT_KEY_ADMIN, {
                            subject: AdminExist.id,
                            expiresIn: "7d"
                        });
                        return (0, class_transformer_1.classToPlain)({ AdminExist, token });
                    }
                }
                else
                    return "SuperKey false";
            }
            else
                return "Nao existe esse usuario";
        });
    }
}
exports.UserOnlyNow = UserOnlyNow;
