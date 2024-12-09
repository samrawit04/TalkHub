import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1733743893871 implements MigrationInterface {
    name = 'CreateUsers1733743893871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "question"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "questions" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_bc2370231ea3e3d296963f33939" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_bc2370231ea3e3d296963f33939"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "questions"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "question" text NOT NULL`);
    }

}
