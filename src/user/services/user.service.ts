import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { DI_CONSTANTS } from '../../common/constants/di.constants';
import { RegisterDTO } from '../../auth/request/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(DI_CONSTANTS.USER) private readonly userRepository: UserRepository,
  ) {}

  findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({where: {email}});
  }

  async create(user: RegisterDTO): Promise<UserEntity> {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return this.userRepository.save(user)
  }
}
