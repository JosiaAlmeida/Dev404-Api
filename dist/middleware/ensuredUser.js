"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
async function ensuredUser(req, res, next) {
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
}
exports.ensuredUser = ensuredUser;
