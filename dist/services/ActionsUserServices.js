var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TypeORM from 'typeorm';
import AparenciaRepositories from '../Repositories/AparenciaRepositories';
import ObjetivoRepositories from '../Repositories/ObjetivoRepositories';
import PacoteRepositories from '../Repositories/PacoteRepositories';
import QualidadeRepositories from '../Repositories/QualidadeRepositories';
import TipoRepositories from '../Repositories/TipoRepositories';
import { UserRepositories } from '../Repositories/UserRepositories';
export default class ActionsUserServices {
    execute(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = TypeORM.getCustomRepository(UserRepositories);
            const tipoRepository = TypeORM.getCustomRepository(TipoRepositories);
            const qualidadeRepo = TypeORM.getCustomRepository(QualidadeRepositories);
            const pacoteRepo = TypeORM.getCustomRepository(PacoteRepositories);
            const objetivoRepo = TypeORM.getCustomRepository(ObjetivoRepositories);
            const aparenciaRepo = TypeORM.getCustomRepository(AparenciaRepositories);
            const findUser = yield userRepository.findOneOrFail({ email });
            const userId = findUser.id;
            const findUserType = yield tipoRepository.find({ user_id: userId });
            const findQualidade = yield qualidadeRepo.find({ user_id: userId });
            const findPacote = yield pacoteRepo.find({ user_id: userId });
            const findObjetivo = yield objetivoRepo.find({ user_id: userId });
            const findAparencia = yield aparenciaRepo.find({ user_id: userId });
            return { findUser, findUserType, findQualidade, findObjetivo, findAparencia, findPacote };
        });
    }
}
//# sourceMappingURL=ActionsUserServices.js.map