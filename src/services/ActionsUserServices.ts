import TypeORM from 'typeorm';
import AparenciaRepositories  from '../Repositories/AparenciaRepositories';
import ObjetivoRepositories from '../Repositories/ObjetivoRepositories';
import PacoteRepositories from '../Repositories/PacoteRepositories';
import QualidadeRepositories from '../Repositories/QualidadeRepositories';
import TipoRepositories from '../Repositories/TipoRepositories';
import {UserRepositories} from '../Repositories/UserRepositories';


export default class ActionsUserServices {
    async execute(email: string){
        const userRepository = TypeORM.getCustomRepository(UserRepositories)
        const tipoRepository = TypeORM.getCustomRepository(TipoRepositories)
        const qualidadeRepo = TypeORM.getCustomRepository(QualidadeRepositories)
        const pacoteRepo = TypeORM.getCustomRepository(PacoteRepositories)
        const objetivoRepo = TypeORM.getCustomRepository(ObjetivoRepositories)
        const aparenciaRepo = TypeORM.getCustomRepository(AparenciaRepositories)

        const findUser = await userRepository.findOneOrFail({email})
        const userId = findUser.id
        const findUserType = await tipoRepository.find({user_id: userId})
        const findQualidade = await qualidadeRepo.find({user_id: userId})
        const findPacote = await pacoteRepo.find({user_id: userId})
        const findObjetivo = await objetivoRepo.find({user_id: userId})
        const findAparencia = await aparenciaRepo.find({user_id: userId})

        return {findUser, findUserType,findQualidade,findObjetivo,findAparencia,findPacote}
    }
}