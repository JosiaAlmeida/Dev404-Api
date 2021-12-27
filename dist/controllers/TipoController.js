var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TipoServices from "../services/TipoServices";
const service = new TipoServices();
export default class TipoController {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Types = yield service.ListType();
            return res.status(200).json(Types);
        });
    }
    FindByType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Types = yield service.FindByType(id);
            return res.status(200).json(Types);
        });
    }
    UpdateType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, type } = req.body;
            const { user_id } = req;
            const Types = yield service.UpdateType({ id, type, user_id });
            return res.status(200).json(Types);
        });
    }
    CreateType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type } = req.body;
            const { user_id } = req;
            const Types = yield service.createService({ user_id, type });
            return res.status(201).json(Types);
        });
    }
    DeleteType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Types = yield service.Delete(id);
            return res.status(204).json(Types);
        });
    }
}
//# sourceMappingURL=TipoController.js.map