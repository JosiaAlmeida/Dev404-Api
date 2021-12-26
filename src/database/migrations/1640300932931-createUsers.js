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
exports.createUsers1640300932931 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1640300932931 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "Dev",
                        type: "varchar",
                        default: "null"
                    },
                    {
                        name: "Bi",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "empresa",
                        type: "varchar",
                        default: "null"
                    },
                    {
                        name: "organizacao",
                        type: "varchar",
                        default: "null"
                    },
                    {
                        name: "historia",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_up",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("users");
        });
    }
}
exports.createUsers1640300932931 = createUsers1640300932931;