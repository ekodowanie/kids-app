import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get } from 'config';
import { AuthModule } from './auth/auth.module';
const databaseConfig: any = {...get('database')};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
