import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createPacote21640303110974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pacote2",
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
