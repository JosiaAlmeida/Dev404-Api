import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AuthAdmin1640342861215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "SuperUser",
                columns:[
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
                        name:"created_at",
                        type: "timestamp"
                    },
                    {
                        name:"updated_at",
                        type: "timestamp"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("SuperUser")
    }

}
