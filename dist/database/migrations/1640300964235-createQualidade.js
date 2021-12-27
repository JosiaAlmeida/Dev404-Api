"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class createQualidade1640300964235 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "qualidade",
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
                    type: "varchar",
                    default: "null"
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
        await queryRunner.dropTable("qualidade");
    }
}
exports.default = createQualidade1640300964235;
//# sourceMappingURL=1640300964235-createQualidade.js.map