import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1733743439108 implements MigrationInterface {
    name = 'CreateUsers1733743439108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "responses" DROP CONSTRAINT "FK_857e15940ea0a8d8acb1e750d8b"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "question"`);
        await queryRunner.query(`ALTER TABLE "responses" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "questions" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "questions"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "responses" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "question" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "responses" ADD CONSTRAINT "FK_857e15940ea0a8d8acb1e750d8b" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
