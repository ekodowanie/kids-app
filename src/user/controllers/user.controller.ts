import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ROLES, UserEntity } from '../entities/user.entity';
import { Auth } from '../../auth/auth.decorator';
import { UserRO } from '../response/user.ro';
import { plainToClass } from 'class-transformer';
import { UserService } from '../services/user.service';
import {Roles} from '../../auth/roles.decorator';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiResponse({ status: 200, type: UserRO })
  @ApiOperation({ description: 'Get user profile' })
  @Roles([ROLES.USER, ROLES.ADMIN])
  @UseGuards(JwtAuthGuard)
  @Get()
  async getMyProfile(@Auth() user: any) {

    return {
      user,
      test: 'test3'
    };
    // const profile = this.userService.findByEmail('test@ekodowanie.pl');
    //
    // return plainToClass(UserRO, profile);
  }
}
