"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreDAtaUser1640306460112 = void 0;
const typeorm_1 = require("typeorm");
class MoreDAtaUser1640306460112 {
    async up(queryRunner) {
        await queryRunner.addColumn("users", new typeorm_1.TableColumn({
            name: "email",
            type: "varchar"
        }));
        await queryRunner.addColumn("users", new typeorm_1.TableColumn({
            name: "number",
            type: "varchar"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn("users", "email");
        await queryRunner.dropColumn("users", "number");
    }
}
exports.MoreDAtaUser1640306460112 = MoreDAtaUser1640306460112;
