"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QualidadeServices_1 = __importDefault(require("../services/QualidadeServices"));
const service = new QualidadeServices_1.default();
class QualidadeController {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Qualidades = yield service.ListQualidade();
            return res.status(200).json(Qualidades);
        });
    }
    FindByQualidade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Qualidades = yield service.FindByQualidade(id);
            return res.status(200).json(Qualidades);
        });
    }
    UpdateQualidade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, type } = req.body;
            const { user_id } = req;
            const Qualidades = yield service.UpdateType({ id, type, user_id });
            return res.status(200).json(Qualidades);
        });
    }
    CreateQualidade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type } = req.body;
            const { user_id } = req;
            const Qualidades = yield service.createService({ user_id, type });
            return res.status(201).json(Qualidades);
        });
    }
    DeleteQualidade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Qualidades = yield service.Delete(id);
            return res.status(204).json(Qualidades);
        });
    }
}
exports.default = QualidadeController;
//# sourceMappingURL=QualidadeController.js.map