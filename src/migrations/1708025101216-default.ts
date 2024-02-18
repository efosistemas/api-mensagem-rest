import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1708025101216 implements MigrationInterface {
    name = 'Default1708025101216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mensagens" ("id" SERIAL NOT NULL, "descricao" text NOT NULL, "celulares" text NOT NULL, CONSTRAINT "PK_c2ba5218f1bff3363548479d2f3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mensagens"`);
    }

}
