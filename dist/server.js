"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
require("./database");
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/user', userRoutes_1.default);
server.get('/', (req, res) => {
    res.send("Dev404-API");
});
server.listen(process.env.PORT || 3000, () => console.log("Dev404-API"));
//# sourceMappingURL=server.js.map