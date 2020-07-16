import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaMigration1594855442459 implements MigrationInterface {
    name = 'SchemaMigration1594855442459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
