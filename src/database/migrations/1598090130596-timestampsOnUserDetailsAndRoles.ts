import {MigrationInterface, QueryRunner} from "typeorm";

export class timestampsOnUserDetailsAndRoles1598090130596 implements MigrationInterface {
    name = 'timestampsOnUserDetailsAndRoles1598090130596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" RENAME COLUMN "created_at" TO "create_at"`);
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "created_at" TO "create_at"`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "create_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "update_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "create_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "create_at" TO "created_at"`);
        await queryRunner.query(`ALTER TABLE "users_details" RENAME COLUMN "create_at" TO "created_at"`);
    }

}
