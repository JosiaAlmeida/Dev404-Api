"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class createPacote21640303110974 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    }
    async down(queryRunner) {
    }
}
exports.default = createPacote21640303110974;
//# sourceMappingURL=1640303110974-createPacote2.js.map