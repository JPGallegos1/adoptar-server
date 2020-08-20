import {MigrationInterface, QueryRunner} from "typeorm";

export class userDetailsMigration1597912407299 implements MigrationInterface {
    name = 'userDetailsMigration1597912407299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_details" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "last_name" character varying(25) NOT NULL, "phone" character varying(20), "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL, "update_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_05b6d195a298be51e8fd56e8bc5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_details"`);
    }

}
