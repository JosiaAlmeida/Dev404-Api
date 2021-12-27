"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = __importDefault(require("typeorm"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SuperUserRepositories_1 = __importDefault(require("../Repositories/SuperUserRepositories"));
const class_transformer_1 = require("class-transformer");
class UserOnlyNow {
    async execute(email) {
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const userExists = await userRepository.findOneOrFail({
            email
        });
        if (userExists.Dev === 'admin') {
            const token = jsonwebtoken_1.default.sign({
                email: userExists.email
            }, process.env.JWT_KEY_ADMIN, {
                subject: userExists.id,
                expiresIn: "1d"
            });
            return { userExists, token };
        }
        else if (userExists) {
            const token = jsonwebtoken_1.default.sign({
                email: userExists.email
            }, process.env.JWT_KEY, {
                subject: userExists.id,
                expiresIn: "1d"
            });
            return { userExists, token };
        }
    }
    async CreateAdmin({ email, password, superKyUser }) {
        const AdminCreate = typeorm_1.default.getCustomRepository(SuperUserRepositories_1.default);
        if (superKyUser == process.env.Admin_Key) {
            const pass = await bcryptjs_1.default.hash(password, 8);
            const Admin = AdminCreate.create({ email, password: pass, });
            await AdminCreate.save(Admin);
            return (0, class_transformer_1.classToPlain)(Admin);
        }
    }
    async LoginAdmin({ email, password, superKyUser }) {
        const AdminCreate = typeorm_1.default.getCustomRepository(SuperUserRepositories_1.default);
        const AdminExist = await AdminCreate.findOne({ email });
        const pass = await bcryptjs_1.default.compare(password, AdminExist.password);
        if (AdminExist) {
            if (superKyUser === process.env.Admin_Key) {
                if (pass) {
                    const token = jsonwebtoken_1.default.sign({
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
exports.default = UserOnlyNow;
//# sourceMappingURL=UserOnlyNow.js.map