import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { DI_CONSTANTS } from '../../common/constants/di.constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(DI_CONSTANTS.USER) private readonly userRepository: UserRepository,
  ) {}

  findById(id: string): Promise<UserEntity> {
    return this.userRepository.findById(id);
  }

  findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({where: {email}});
  }

  create(user: any): Promise<UserEntity> {
    return this.userRepository.save(user)
  }
}
