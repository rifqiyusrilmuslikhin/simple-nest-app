import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableKaryawanTugas1666287356894 implements MigrationInterface {
    name = 'createTableKaryawanTugas1666287356894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tugas" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "assigneeId" integer, CONSTRAINT "PK_c47128bea268a373b07dd6ba74a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "karyawan" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_fdb8d1ca3cdb99f669a0d9085a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tugas" ADD CONSTRAINT "FK_2274c771131cdc8df5087227267" FOREIGN KEY ("assigneeId") REFERENCES "karyawan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tugas" DROP CONSTRAINT "FK_2274c771131cdc8df5087227267"`);
        await queryRunner.query(`DROP TABLE "karyawan"`);
        await queryRunner.query(`DROP TABLE "tugas"`);
    }

}
