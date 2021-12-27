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
const UserOnlyNow_1 = __importDefault(require("../services/UserOnlyNow"));
const userOnly = new UserOnlyNow_1.default();
class UserOnlyNowController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            const userActive = yield userOnly.execute(email);
            return res.status(200).json(userActive);
        });
    }
    CreateAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, superKyUser } = req.body;
            const Admin = yield userOnly.CreateAdmin({ email, password, superKyUser });
            return res.status(201).json(Admin);
        });
    }
    LoginAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, superKyUser } = req.body;
            const Admin = yield userOnly.LoginAdmin({ email, password, superKyUser });
            return res.status(201).json(Admin);
        });
    }
}
exports.default = UserOnlyNowController;
//# sourceMappingURL=UserOnlyNowController.js.map