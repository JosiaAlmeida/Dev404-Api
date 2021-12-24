import { getCustomRepository } from 'typeorm';
import { AparenciaRepositories } from '../Repositories/AparenciaRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';

interface IAparencia {
    id ?:string
    user_id: string
    type: string
}

class AparenciaServices {

    async ListAparencia(){
        const aparenciaRepositories = getCustomRepository(AparenciaRepositories)

        const Aparencia = await aparenciaRepositories.find()
        const Aparencias = Aparencia.map(t => t)
        return Aparencias
    }

    async FindByAparencia(id: string){
        const aparenciaRepositories = getCustomRepository(AparenciaRepositories)

        const Aparencia = await aparenciaRepositories.findOneOrFail(id)

        return Aparencia
    }

    async createService({ user_id, type }: IAparencia) {
        const aparenciaRepositories = getCustomRepository(AparenciaRepositories)
        const userRepository = getCustomRepository(UserRepositories)
        const userExists = await userRepository.findOne(user_id)
        //const AparenciaExists = await AparenciaRepositories.findOneOrFail({
         //   Aparencia: Aparencia
        //})
        console.log(userExists)
        if (userExists) {
            const Aparencia = aparenciaRepositories.create({ user_id, type })

            await aparenciaRepositories.save(Aparencia)
            return {Aparencia, userExists}
        }else{
            return "Usuario inexistente\Aparencia Existente"
        }
    }

    async UpdateType({id, type, user_id}:IAparencia){
        const aparenciaRepositories = getCustomRepository(AparenciaRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await aparenciaRepositories.findOne(id)

        if (userExists) {
            const AparenciaUpdate = aparenciaRepositories.update(id, {
                user_id,
                type
            })

            return AparenciaUpdate
        }
    }

    async Delete(id: string){
        const aparenciaRepositories = getCustomRepository(AparenciaRepositories)
        await aparenciaRepositories.delete(id)
        return "Eliminado"
    }
} export { AparenciaServices }