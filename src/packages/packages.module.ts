import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages.service';
import { PackagesRepository } from './repository/packages.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PackagesRepository])],
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}
