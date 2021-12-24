import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../Repositories/UserRepositories';


class UserOnlyNow {
    async execute(email:string){
        const userRepository = getCustomRepository(UserRepositories)

        const userExists = await userRepository.findOneOrFail({
            email
        })
        if(userExists){
            const token = sign({
                email: userExists.email
            },
            process.env.JWT_KEY,
            {
                subject: userExists.id,
                expiresIn: "1d"
            }
            )
            return {userExists,token}
        }
    }
}export {UserOnlyNow}