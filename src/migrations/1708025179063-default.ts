import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1708025179063 implements MigrationInterface {
    name = 'Default1708025179063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mensagens" RENAME COLUMN "celulares" TO "celular"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mensagens" RENAME COLUMN "celular" TO "celulares"`);
    }

}
