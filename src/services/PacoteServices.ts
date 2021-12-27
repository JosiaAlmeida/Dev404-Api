import TypeORM from 'typeorm';
import PacoteRepositories from '../Repositories/PacoteRepositories';
import {UserRepositories} from '../Repositories/UserRepositories';

interface IPacote {
    id ?:string
    user_id: string
    name: string,
    preco: string
    PaginaTotal:string
    BD: boolean
    Manutencao: string
    Descricao: string
    selecionado: boolean
}

export default class PacoteServices {

    async ListPacote(){
        const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories)

        const Pacote = await pacoteRepositories.find()
        const Pacotes = Pacote.map(t => t)
        return Pacotes
    }

    async FindByPacote(id: string){
        const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories)

        const Pacote = await pacoteRepositories.findOneOrFail(id)

        return Pacote
    }

    async createService({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }: IPacote) {
        const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories)
        const userRepository = TypeORM.getCustomRepository(UserRepositories)
        const userExists = await userRepository.findOne(user_id)
        console.log(userExists)
        if (userExists) {
            const Pacote = pacoteRepositories.create({ user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado })

            await pacoteRepositories.save(Pacote)
            return {Pacote, userExists}
        }else{
            return "Usuario inexistente\Pacote Existente"
        }
    }

    async UpdateType({id, user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado }:IPacote){
        const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories)
        //const userVerify = await this.FindById(id)
        const userExists = await pacoteRepositories.findOne(id)

        if (userExists) {
            const PacoteUpdate = pacoteRepositories.update(id, {user_id, name, preco, PaginaTotal, BD, Manutencao, Descricao, selecionado })

            return PacoteUpdate
        }
    }

    async Delete(id: string){
        const pacoteRepositories = TypeORM.getCustomRepository(PacoteRepositories)
        await pacoteRepositories.delete(id)
        return "Eliminado"
    }
} 