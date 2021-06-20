import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1624210732060 implements MigrationInterface {
    name = 'PostRefactoring1624210732060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "title" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "title" DROP NOT NULL`);
    }

}
