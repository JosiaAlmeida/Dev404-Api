"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1640300932931 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1640300932931 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.createUsers1640300932931 = createUsers1640300932931;
