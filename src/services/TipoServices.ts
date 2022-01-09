import TypeORM from 'typeorm';
import TipoRepositories from '../Repositories/TipoRepositories';
import {UserRepositories} from '../Repositories/UserRepositories';

interface IType {
    id ?:string
    user_id: string
    type: string
}

export default class TipoServices {

    async ListType(){
        const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories)

        const type = await TypeRepositories.find()
        const types = type.map(t => t)
        return types
    }

    async FindByType(id: string){
        const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories)

        const type = await TypeRepositories.findOneOrFail(id)

        return type
    }

    async createService({ user_id, type }: IType) {
        const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories)
        const userRepository = TypeORM.getCustomRepository(UserRepositories)
        const userExists = await userRepository.findOne(user_id)
        console.log(userExists)
        if (userExists.Dev !="Admin") {
            const Type = TypeRepositories.create({ user_id, type })

            await TypeRepositories.save(Type)
            return {Type, userExists}
        }else{
            return "Usuario inexistente\Tipo Existente"
        }
    }

    async UpdateType({id, type, user_id}:IType){
        const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await TypeRepositories.findOne(id)

        if (userExists) {
            const TypeUpdate = TypeRepositories.update(id, {
                user_id,
                type
            })

            return TypeUpdate
        }
    }

    async Delete(id: string){
        const TypeRepositories = TypeORM.getCustomRepository(TipoRepositories)
        await TypeRepositories.delete(id)
        return "Eliminado"
    }
} 