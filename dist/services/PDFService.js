"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFService = void 0;
const typeorm_1 = require("typeorm");
const AparenciaRepositories_1 = require("../Repositories/AparenciaRepositories");
const ObjetivoRepositories_1 = require("../Repositories/ObjetivoRepositories");
const PacoteRepositories_1 = require("../Repositories/PacoteRepositories");
const QualidadeRepositories_1 = require("../Repositories/QualidadeRepositories");
const TipoRepositories_1 = require("../Repositories/TipoRepositories");
const UserRepositories_1 = require("../Repositories/UserRepositories");
const ActionsUserServices_1 = require("./ActionsUserServices");
class PDFService {
    async execute(email) {
        const userRepository = (0, typeorm_1.getCustomRepository)(UserRepositories_1.UserRepositories);
        const tipoRepository = (0, typeorm_1.getCustomRepository)(TipoRepositories_1.TipoRepositories);
        const qualidadeRepo = (0, typeorm_1.getCustomRepository)(QualidadeRepositories_1.QualidadeRepositories);
        const pacoteRepo = (0, typeorm_1.getCustomRepository)(PacoteRepositories_1.PacoteRepositories);
        const objetivoRepo = (0, typeorm_1.getCustomRepository)(ObjetivoRepositories_1.ObjetivoRepositories);
        const aparenciaRepo = (0, typeorm_1.getCustomRepository)(AparenciaRepositories_1.AparenciaRepositories);
        const Service = new ActionsUserServices_1.ActionsUserServices();
    }
}
exports.PDFService = PDFService;
