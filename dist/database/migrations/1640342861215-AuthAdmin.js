"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdmin1640342861215 = void 0;
const typeorm_1 = require("typeorm");
class AuthAdmin1640342861215 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "SuperUser",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "Dev",
                    type: "varchar",
                    default: true
                },
                {
                    name: "created_at",
                    type: "timestamp"
                },
                {
                    name: "updated_at",
                    type: "timestamp"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("SuperUser");
    }
}
exports.AuthAdmin1640342861215 = AuthAdmin1640342861215;
