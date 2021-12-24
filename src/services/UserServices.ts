import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../Repositories/UserRepositories"

interface IUser {
    name: string
    Bi: string
    sexo: string
    empresa: string
    organizacao: string
    historia: string
    number: string
    email: string
}

class UserServices {
    
    async CreateUser({
        name,
        Bi,
        sexo,
        empresa,
        organizacao,
        historia,
        email,
        number
    }: IUser) {
        const userRepositories = getCustomRepository(UserRepositories)
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
                number
            })
            userRepositories.save(user)
            return user
        }
    }
} export { UserServices }