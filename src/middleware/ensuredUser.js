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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensuredUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenHeader = req.headers.authorization;
        if (tokenHeader) {
            const [, token] = tokenHeader.split(' ');
            if (token) {
                try {
                    if ((0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY)) {
                        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                        if (sub)
                            req.user_id = sub;
                    }
                    else if ((0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY_ADMIN)) {
                        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY_ADMIN);
                        if (sub)
                            req.user_id = sub;
                    }
                    return next();
                }
                catch (error) {
                    return res.status(401).json({ message: "Token invalid!" });
                }
            }
            else {
                return res.status(401).json({ message: "UnAuthorizade" });
            }
        }
        else
            return res.status(401).json({ message: "Token Invalid or empty!!" });
    });
}
exports.ensuredUser = ensuredUser;