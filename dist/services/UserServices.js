"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const typeorm_1 = require("typeorm");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class UserServices {
    async AllUser() {
        const userRepositories = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const findUsers = await userRepositories.find();
        const Users = findUsers.map((user) => user);
        return Users;
    }
    async FindById(id) {
        const userRepositories = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const userVerify = await userRepositories.findOne({ id });
        return userVerify;
    }
    async CreateUser({ name, Bi, sexo, empresa, organizacao, historia, email, number, Dev }) {
        const userRepositories = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const userVerify = await userRepositories.findOne({ email });
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
            await userRepositories.save(user);
            return user;
        }
    }
    async UpdateUser(id, { name, Bi, sexo, empresa, organizacao, historia, email, number, Dev }) {
        const userRepositories = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        //const userVerify = await this.FindById(id)
        const userExists = await userRepositories.findOne(id);
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
            //await userRepositories.save(userUpdate)
            return userUpdate;
        }
    }
    async DistroyUser(id) {
        const userRepositories = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const user = await this.FindById(id);
        if (user) {
            await userRepositories.delete(id);
            return "Ok";
        }
        else
            return "User inexistente";
    }
}
exports.UserServices = UserServices;
