"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOnlyNow = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const UserRepositories_1 = require("../Repositories/UserRepositories");
const bcryptjs_1 = require("bcryptjs");
const SuperUserRepositories_1 = require("../Repositories/SuperUserRepositories");
const class_transformer_1 = require("class-transformer");
class UserOnlyNow {
    async execute(email) {
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOneOrFail({
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
    }
    async CreateAdmin({ email, password, superKyUser }) {
        const AdminCreate = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
        if (superKyUser == process.env.Admin_Key) {
            const pass = await (0, bcryptjs_1.hash)(password, 8);
            const Admin = AdminCreate.create({ email, password: pass, });
            await AdminCreate.save(Admin);
            return (0, class_transformer_1.classToPlain)(Admin);
        }
    }
    async LoginAdmin({ email, password, superKyUser }) {
        const AdminCreate = (0, typeorm_1.getCustomRepository)(SuperUserRepositories_1.SuperUserRepositories);
        const AdminExist = await AdminCreate.findOne({ email });
        const pass = await (0, bcryptjs_1.compare)(password, AdminExist.password);
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
    }
}
exports.UserOnlyNow = UserOnlyNow;
