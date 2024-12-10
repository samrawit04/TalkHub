import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1733745531506 implements MigrationInterface {
    name = 'CreateUsers1733745531506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "Dats" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "Dats"`);
    }

}
