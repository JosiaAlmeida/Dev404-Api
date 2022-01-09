import TypeORM from "typeorm"
import {UserRepositories} from "../Repositories/UserRepositories"

interface IUser {
    name: string
    Bi: string
    sexo: string
    empresa: string
    organizacao: string
    historia: string
    number: string
    email: string
    Dev: string
}

class UserServices {
    async AllUser() {
        const userRepositories = TypeORM.getCustomRepository(UserRepositories)
        const findUsers = await userRepositories.find()
        const Users = findUsers.map((user) => user)

        return Users
    }

    async FindById(id: string) {
        const userRepositories = TypeORM.getCustomRepository(UserRepositories)
        const userVerify = await userRepositories.findOne({ id })

        return userVerify

    }

    async CreateUser({
        name,
        Bi,
        sexo,
        empresa,
        organizacao,
        historia,
        email,
        number,
        Dev
    }: IUser) {
        const userRepositories = TypeORM.getCustomRepository(UserRepositories)
        const userVerify = await userRepositories.findOne({ email })
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
            })
            await userRepositories.save(user)
            return user
        }
    }
    async UpdateUser(id: string, {
        name,
        Bi,
        sexo,
        empresa,
        organizacao,
        historia,
        email,
        number,
        Dev
    }: IUser) {
        const userRepositories = TypeORM.getCustomRepository(UserRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await userRepositories.findOne(id)

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
            })

            //await userRepositories.save(userUpdate)

            return userUpdate
        }
    }

    async DistroyUser(id: string){
        const userRepositories = TypeORM.getCustomRepository(UserRepositories)
        const user = await this.FindById(id)

        if(user){
            await userRepositories.delete(id)

            return "Ok"
        }else return "User inexistente"
    }
} 
module.exports = UserServices