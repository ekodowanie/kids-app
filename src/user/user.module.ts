import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserRepositoryProvider } from '../common/providers/repositories/user-repository.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
    UserRepositoryProvider,
  ],
  exports: [
    UserService,
  ]
})
export class UserModule {}
