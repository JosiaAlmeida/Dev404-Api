import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createType1640301033993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "type",
                columns:[
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
                        //default: "null"
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
                foreignKeys:[
                    {
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("type")
    }

}
