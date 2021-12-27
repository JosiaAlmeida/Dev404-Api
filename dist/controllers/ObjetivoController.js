var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ObjetivoServices from "../services/ObjetivoServices";
const service = new ObjetivoServices();
export default class ObjetivoController {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Types = yield service.ListObjetivo();
            return res.status(200).json(Types);
        });
    }
    FindByType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Types = yield service.FindByObjetivo(id);
            return res.status(200).json(Types);
        });
    }
    Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, type } = req.body;
            const { user_id } = req;
            const Types = yield service.UpdateType({ id, type, user_id });
            return res.status(200).json(Types);
        });
    }
    Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type } = req.body;
            const { user_id } = req;
            const Types = yield service.createService({ user_id, type });
            return res.status(201).json(Types);
        });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Types = yield service.Delete(id);
            return res.status(204).json(Types);
        });
    }
}
//# sourceMappingURL=ObjetivoController.js.map