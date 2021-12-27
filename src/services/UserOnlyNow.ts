import Jsonwebtoken from 'jsonwebtoken';
import TypeORM from 'typeorm';
import {UserRepositories} from '../Repositories/UserRepositories';
import Bcryptjs from 'bcryptjs'
import SuperUserRepositories from '../Repositories/SuperUserRepositories';
import {classToPlain} from 'class-transformer'

interface IAdmin {
    email: string
    password: string
    superKyUser: string
}

export default class UserOnlyNow {
    async execute(email: string) {
        const userRepository = TypeORM.getCustomRepository(UserRepositories)

        const userExists = await userRepository.findOneOrFail({
            email
        })
        if (userExists.Dev === 'admin') {
            const token = Jsonwebtoken.sign({
                email: userExists.email
            },
                process.env.JWT_KEY_ADMIN,
                {
                    subject: userExists.id,
                    expiresIn: "1d"
                }
            )
            return { userExists, token }
        }
        else if(userExists){
            const token = Jsonwebtoken.sign({
                email: userExists.email
            },
                process.env.JWT_KEY,
                {
                    subject: userExists.id,
                    expiresIn: "1d"
                }
            )
            return { userExists, token }
        }

    }

    async CreateAdmin({ email, password, superKyUser }: IAdmin) {
        const AdminCreate = TypeORM.getCustomRepository(SuperUserRepositories)
        if (superKyUser == process.env.Admin_Key) {
            const pass = await Bcryptjs.hash(password, 8)
            const Admin = AdminCreate.create({ email, password: pass, })
            await AdminCreate.save(Admin)

            return classToPlain(Admin)
        }
    }
    async LoginAdmin({ email, password, superKyUser }: IAdmin) {
        const AdminCreate = TypeORM.getCustomRepository(SuperUserRepositories)
        const AdminExist = await AdminCreate.findOne({ email })

        const pass = await Bcryptjs.compare(password, AdminExist.password)
        if (AdminExist) {
            if (superKyUser === process.env.Admin_Key) {
                if (pass) {
                    const token = Jsonwebtoken.sign({
                        email: AdminExist.email
                    },
                        process.env.JWT_KEY_ADMIN,
                        {
                            subject: AdminExist.id,
                            expiresIn: "7d"
                        }
                    )

                    return classToPlain({AdminExist,token})
                }
            }else return "SuperKey false"
        }else return "Nao existe esse usuario"
    }
} 