/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PackagesModule, UsersModule, AuthModule],
})
export class AppModule {}
