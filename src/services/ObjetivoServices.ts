import { getCustomRepository } from 'typeorm';
import { ObjetivoRepositories } from '../Repositories/ObjetivoRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';

interface IObjetivo {
    id ?:string
    user_id: string
    type: string
}

class ObjetivoServices {

    async ListObjetivo(){
        const objetivoRepositories = getCustomRepository(ObjetivoRepositories)

        const Objetivo = await objetivoRepositories.find()
        const Objetivos = Objetivo.map(t => t)
        return Objetivos
    }

    async FindByObjetivo(id: string){
        const objetivoRepositories = getCustomRepository(ObjetivoRepositories)

        const Objetivo = await objetivoRepositories.findOneOrFail(id)

        return Objetivo
    }

    async createService({ user_id, type }: IObjetivo) {
        const objetivoRepositories = getCustomRepository(ObjetivoRepositories)
        const userRepository = getCustomRepository(UserRepositories)
        const userExists = await userRepository.findOne(user_id)
        //const ObjetivoExists = await ObjetivoRepositories.findOneOrFail({
         //   Objetivo: Objetivo
        //})
        console.log(userExists)
        if (userExists) {
            const Objetivo = objetivoRepositories.create({ user_id, type })

            await objetivoRepositories.save(Objetivo)
            return {Objetivo, userExists}
        }else{
            return "Usuario inexistente\Objetivo Existente"
        }
    }

    async UpdateType({id, type, user_id}:IObjetivo){
        const objetivoRepositories = getCustomRepository(ObjetivoRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await objetivoRepositories.findOne(id)

        if (userExists) {
            const ObjetivoUpdate = objetivoRepositories.update(id, {
                user_id,
                type
            })

            return ObjetivoUpdate
        }
    }

    async Delete(id: string){
        const objetivoRepositories = getCustomRepository(ObjetivoRepositories)
        await objetivoRepositories.delete(id)
        return "Eliminado"
    }
} export { ObjetivoServices }