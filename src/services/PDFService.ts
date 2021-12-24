import { getCustomRepository } from 'typeorm';
import { AparenciaRepositories } from '../Repositories/AparenciaRepositories';
import { ObjetivoRepositories } from '../Repositories/ObjetivoRepositories';
import { PacoteRepositories } from '../Repositories/PacoteRepositories';
import { QualidadeRepositories } from '../Repositories/QualidadeRepositories';
import { TipoRepositories } from '../Repositories/TipoRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';


class PDFService{
    async execute(email: string){
        const userRepository = getCustomRepository(UserRepositories)
        const tipoRepository = getCustomRepository(TipoRepositories)
        const qualidadeRepo = getCustomRepository(QualidadeRepositories)
        const pacoteRepo = getCustomRepository(PacoteRepositories)
        const objetivoRepo = getCustomRepository(ObjetivoRepositories)
        const aparenciaRepo = getCustomRepository(AparenciaRepositories)

        


    }
}export {PDFService}