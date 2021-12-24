import { getCustomRepository } from 'typeorm';
import { QualidadeRepositories } from '../Repositories/QualidadeRepositories';
import { SuperUserRepositories } from '../Repositories/SuperUserRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';

interface IQualidade {
    id ?:string
    user_id: string
    type: string
}

class QualidadeServices {

    async ListQualidade(){
        const qualidadeRepositories = getCustomRepository(QualidadeRepositories)

        const Qualidade = await qualidadeRepositories.find()
        const Qualidades = Qualidade.map(t => t)
        return Qualidades
    }

    async FindByQualidade(id: string){
        const qualidadeRepositories = getCustomRepository(QualidadeRepositories)

        const Qualidade = await qualidadeRepositories.findOneOrFail(id)

        return Qualidade
    }

    async createService({ user_id, type }: IQualidade) {
        const qualidadeRepositories = getCustomRepository(QualidadeRepositories)
        const userRepository = getCustomRepository(UserRepositories)
        const userExists = await userRepository.findOne(user_id)

        const superUserAdmin = getCustomRepository(SuperUserRepositories)
        console.log(userExists)
        if (userExists.Dev !="null") {
            const qualidade = qualidadeRepositories.create({ user_id, type })

            await qualidadeRepositories.save(qualidade)
            return {qualidade, userExists}
        }else{
            return "Usuario inexistente\Qualidade Existente"
        }
    }

    async UpdateType({id, type, user_id}:IQualidade){
        const qualidadeRepositories = getCustomRepository(QualidadeRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await qualidadeRepositories.findOne(id)

        if (userExists) {
            const qualidadeUpdate = qualidadeRepositories.update(id, {
                user_id,
                type
            })

            return qualidadeUpdate
        }
    }

    async Delete(id: string){
        const qualidadeRepositories = getCustomRepository(QualidadeRepositories)
        await qualidadeRepositories.delete(id)
        return "Eliminado"
    }
} export { QualidadeServices }