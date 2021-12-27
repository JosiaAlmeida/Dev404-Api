import TypeORM from 'typeorm';
import AparenciaRepositories from '../Repositories/AparenciaRepositories';
import ObjetivoRepositories from '../Repositories/ObjetivoRepositories';
import PacoteRepositories from '../Repositories/PacoteRepositories';
import QualidadeRepositories from '../Repositories/QualidadeRepositories';
import TipoRepositories from '../Repositories/TipoRepositories';
import {UserRepositories} from '../Repositories/UserRepositories';
import ActionsUserServices from './ActionsUserServices';


export default class PDFService{
    async execute(email: string){
        const userRepository = TypeORM.getCustomRepository(UserRepositories)
        const tipoRepository = TypeORM.getCustomRepository(TipoRepositories)
        const qualidadeRepo = TypeORM.getCustomRepository(QualidadeRepositories)
        const pacoteRepo = TypeORM.getCustomRepository(PacoteRepositories)
        const objetivoRepo = TypeORM.getCustomRepository(ObjetivoRepositories)
        const aparenciaRepo = TypeORM.getCustomRepository(AparenciaRepositories)

        const Service = new ActionsUserServices()


    }
}