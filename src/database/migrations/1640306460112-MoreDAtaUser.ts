import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class MoreDAtaUser1640306460112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "email",
                type: "varchar"
            }),
        )
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "number",
                type: "varchar"
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","email")
        await queryRunner.dropColumn("users","number")
    }

}
