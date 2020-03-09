import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Roles } from '../../authorization/roles.decorator';
import { ROLES, UserEntity } from '../entities/user.entity';
import { Auth } from '../../authorization/auth.decorator';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
export class UserController {

@ApiResponse({ status: 200, type: ProfileRO, isArray: true })
@Roles([ROLES.ADMIN])
@ApiOperation({ title: 'Get all users profiles' })
@Get('all')
async getAllProfile(
  @Auth() logged: UserEntity,
  @Query(new ValidationPipe(userQuerySchema)) query: UserQueryDTO) {
  return [
    {
      name: 'test'
    }
  ];
}

}
