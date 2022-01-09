import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createUsers1640300932931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
