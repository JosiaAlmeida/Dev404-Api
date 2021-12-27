var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Jsonwebtoken from 'jsonwebtoken';
import TypeORM from 'typeorm';
import { UserRepositories } from '../Repositories/UserRepositories';
import Bcryptjs from 'bcryptjs';
import SuperUserRepositories from '../Repositories/SuperUserRepositories';
import { classToPlain } from 'class-transformer';
export default class UserOnlyNow {
    execute(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = TypeORM.getCustomRepository(UserRepositories);
            const userExists = yield userRepository.findOneOrFail({
                email
            });
            if (userExists.Dev === 'admin') {
                const token = Jsonwebtoken.sign({
                    email: userExists.email
                }, process.env.JWT_KEY_ADMIN, {
                    subject: userExists.id,
                    expiresIn: "1d"
                });
                return { userExists, token };
            }
            else if (userExists) {
                const token = Jsonwebtoken.sign({
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
            const AdminCreate = TypeORM.getCustomRepository(SuperUserRepositories);
            if (superKyUser == process.env.Admin_Key) {
                const pass = yield Bcryptjs.hash(password, 8);
                const Admin = AdminCreate.create({ email, password: pass, });
                yield AdminCreate.save(Admin);
                return classToPlain(Admin);
            }
        });
    }
    LoginAdmin({ email, password, superKyUser }) {
        return __awaiter(this, void 0, void 0, function* () {
            const AdminCreate = TypeORM.getCustomRepository(SuperUserRepositories);
            const AdminExist = yield AdminCreate.findOne({ email });
            const pass = yield Bcryptjs.compare(password, AdminExist.password);
            if (AdminExist) {
                if (superKyUser === process.env.Admin_Key) {
                    if (pass) {
                        const token = Jsonwebtoken.sign({
                            email: AdminExist.email
                        }, process.env.JWT_KEY_ADMIN, {
                            subject: AdminExist.id,
                            expiresIn: "7d"
                        });
                        return classToPlain({ AdminExist, token });
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
//# sourceMappingURL=UserOnlyNow.js.map