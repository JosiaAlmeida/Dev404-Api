"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAparencia1640301058703 = void 0;
const typeorm_1 = require("typeorm");
class createAparencia1640301058703 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "aparencia",
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
                    name: "type",
                    type: "varchar"
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
        await queryRunner.dropTable("aparencia");
    }
}
exports.createAparencia1640301058703 = createAparencia1640301058703;
