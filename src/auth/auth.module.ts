import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller'
import { get } from 'config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: get('session.secret'),
      signOptions: { expiresIn: '360s' }
    })
  ],
  controllers: [
    AuthController,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}