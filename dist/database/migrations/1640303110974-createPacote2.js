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
const typeorm_1 = require("typeorm");
class createPacote21640303110974 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "pacote",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "preco",
                        type: "varchar"
                    },
                    {
                        name: "PaginaTotal",
                        type: "varchar"
                    },
                    {
                        name: "BD",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "Manutencao",
                        type: "varchar"
                    },
                    {
                        name: "Descricao",
                        type: "varchar"
                    },
                    {
                        name: "selecionado",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updade_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = createPacote21640303110974;
//# sourceMappingURL=1640303110974-createPacote2.js.map