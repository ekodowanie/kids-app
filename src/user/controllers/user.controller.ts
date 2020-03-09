import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../authorization/roles.decorator';
import { ROLES, UserEntity } from '../entities/user.entity';
import { Auth } from '../../authorization/auth.decorator';
import { UserRO } from '../response/user.ro';
import { plainToClass } from 'class-transformer';
import { UserService } from '../services/user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiResponse({ status: 200, type: UserRO })
  @Roles([ROLES.USER, ROLES.ADMIN])
  @ApiOperation({ description: 'Get user profile, information about therapies and nearest event' })
  @Get()
  async getMyProfile(@Auth() user: UserEntity) {
    const profile = this.userService.findById(user.id);

    return plainToClass(UserRO, profile);
  }
}
