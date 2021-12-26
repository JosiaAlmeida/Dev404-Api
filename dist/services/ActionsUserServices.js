"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsUserServices = void 0;
const typeorm_1 = require("typeorm");
const AparenciaRepositories_1 = require("../Repositories/AparenciaRepositories");
const ObjetivoRepositories_1 = require("../Repositories/ObjetivoRepositories");
const PacoteRepositories_1 = require("../Repositories/PacoteRepositories");
const QualidadeRepositories_1 = require("../Repositories/QualidadeRepositories");
const TipoRepositories_1 = require("../Repositories/TipoRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
class ActionsUserServices {
    async execute(email) {
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const tipoRepository = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        const qualidadeRepo = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        const pacoteRepo = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        const objetivoRepo = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        const aparenciaRepo = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        const findUser = await userRepository.findOneOrFail({ email });
        const userId = findUser.id;
        const findUserType = await tipoRepository.find({ user_id: userId });
        const findQualidade = await qualidadeRepo.find({ user_id: userId });
        const findPacote = await pacoteRepo.find({ user_id: userId });
        const findObjetivo = await objetivoRepo.find({ user_id: userId });
        const findAparencia = await aparenciaRepo.find({ user_id: userId });
        return { findUser, findUserType, findQualidade, findObjetivo, findAparencia, findPacote };
    }
}
exports.ActionsUserServices = ActionsUserServices;
