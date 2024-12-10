import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1733745578210 implements MigrationInterface {
    name = 'CreateUsers1733745578210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "Dats"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "Dats" character varying NOT NULL`);
    }

}
