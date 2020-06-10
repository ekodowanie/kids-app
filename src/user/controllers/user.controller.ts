import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ROLES, UserEntity } from '../entities/user.entity';
import { Auth } from '../../authorization/auth.decorator';
import { UserRO } from '../response/user.ro';
import { plainToClass } from 'class-transformer';
import { UserService } from '../services/user.service';
import {Roles} from '../../auth/roles.decorator';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiResponse({ status: 200, type: UserRO })
  @Roles([ROLES.USER, ROLES.ADMIN])
  @ApiOperation({ description: 'Get user profile' })
  @Get()
  async getMyProfile(@Auth() user: UserEntity) {
    return {
      userData: user,
      test: 'test3'
    };
    // const profile = this.userService.findByEmail('test@ekodowanie.pl');
    //
    // return plainToClass(UserRO, profile);
  }
}
