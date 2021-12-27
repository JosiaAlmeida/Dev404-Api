"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __importDefault(require("typeorm"));
const AparenciaRepositories_1 = __importDefault(require("../Repositories/AparenciaRepositories"));
const ObjetivoRepositories_1 = __importDefault(require("../Repositories/ObjetivoRepositories"));
const PacoteRepositories_1 = __importDefault(require("../Repositories/PacoteRepositories"));
const QualidadeRepositories_1 = __importDefault(require("../Repositories/QualidadeRepositories"));
const TipoRepositories_1 = __importDefault(require("../Repositories/TipoRepositories"));
const UserRepositories_1 = require("../Repositories/UserRepositories");
const ActionsUserServices_1 = __importDefault(require("./ActionsUserServices"));
class PDFService {
    async execute(email) {
        const userRepository = typeorm_1.default.getCustomRepository(UserRepositories_1.UserRepositories);
        const tipoRepository = typeorm_1.default.getCustomRepository(TipoRepositories_1.default);
        const qualidadeRepo = typeorm_1.default.getCustomRepository(QualidadeRepositories_1.default);
        const pacoteRepo = typeorm_1.default.getCustomRepository(PacoteRepositories_1.default);
        const objetivoRepo = typeorm_1.default.getCustomRepository(ObjetivoRepositories_1.default);
        const aparenciaRepo = typeorm_1.default.getCustomRepository(AparenciaRepositories_1.default);
        const Service = new ActionsUserServices_1.default();
    }
}
exports.default = PDFService;
//# sourceMappingURL=PDFService.js.map