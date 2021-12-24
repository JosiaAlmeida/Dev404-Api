import { getCustomRepository } from 'typeorm';
import { AparenciaRepositories } from '../Repositories/AparenciaRepositories';
import { ObjetivoRepositories } from '../Repositories/ObjetivoRepositories';
import { PacoteRepositories } from '../Repositories/PacoteRepositories';
import { QualidadeRepositories } from '../Repositories/QualidadeRepositories';
import { TipoRepositories } from '../Repositories/TipoRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';


class ActionsUserServices {
    async execute(email: string){
        const userRepository = getCustomRepository(UserRepositories)
        const tipoRepository = getCustomRepository(TipoRepositories)
        const qualidadeRepo = getCustomRepository(QualidadeRepositories)
        const pacoteRepo = getCustomRepository(PacoteRepositories)
        const objetivoRepo = getCustomRepository(ObjetivoRepositories)
        const aparenciaRepo = getCustomRepository(AparenciaRepositories)

        const findUser = await userRepository.findOneOrFail({email})
        const userId = findUser.id
        const findUserType = await tipoRepository.find({user_id: userId})
        const findQualidade = await qualidadeRepo.find({user_id: userId})
        const findPacote = await pacoteRepo.find({user_id: userId})
        const findObjetivo = await objetivoRepo.find({user_id: userId})
        const findAparencia = await aparenciaRepo.find({user_id: userId})

        return {findUser, findUserType,findQualidade,findObjetivo,findAparencia,findPacote}
    }
}export {ActionsUserServices}