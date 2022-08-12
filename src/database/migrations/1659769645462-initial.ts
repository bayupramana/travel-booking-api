import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1659769645462 implements MigrationInterface {
  name = 'initial1659769645462';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `salt` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `refresh_token` (`id` varchar(36) NOT NULL, `isRevoked` tinyint NOT NULL, `expiredAt` datetime NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `Packages` (`id_package` varchar(255) NOT NULL, `packageName` varchar(255) NOT NULL, `destination` text NOT NULL, `price` int NOT NULL, PRIMARY KEY (`id_package`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `refresh_token` ADD CONSTRAINT `FK_8e913e288156c133999341156ad` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `refresh_token` DROP FOREIGN KEY `FK_8e913e288156c133999341156ad`',
    );
    await queryRunner.query('DROP TABLE `Packages`');
    await queryRunner.query('DROP TABLE `refresh_token`');
    await queryRunner.query(
      'DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`',
    );
    await queryRunner.query('DROP TABLE `user`');
  }
}
