import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'crudappdatabase',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
    UsersModule]
})
export class AppModule {}
