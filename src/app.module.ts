import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { get } from 'config';
const databaseConfig: any = {...get('database')};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
