import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableUsers1622582571890 implements MigrationInterface {


    private userTable = new Table({
        name: 'users',
        columns:[
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'name',
                type:  'VARCHAR',
                length: '255'
            },
            {
                name: 'password',
                type: 'VARCHAR',
                length: '255'
            },
            {
                name: 'cpf',
                type: 'VARCHAR',
                length: '14'
            },
            {
                name: 'create_at',
                type: 'TIMESTAMP',
                default: 'NOW()'
            },
            {
                name: 'update_at',
                type: 'TIMESTAMP',
                default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()'
            },
            {
                name: 'deleted_at',
                type: 'TIMESTAMP',
                isNullable: true
            },
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.userTable);
    }

}
