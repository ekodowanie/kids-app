import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, UseGuards, Request, Body, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterRO } from './response/register.ro';
import { RegisterDTO } from './request/register.dto';
import { RegisterSchema } from './request/register.schema';
import { USER_ALREADY_EXISTS } from '../common/error/keys';
import { UserService } from '../user/services/user.service';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ){}

  @ApiResponse({ status: 200 })
  @ApiOperation({ description: 'Post user login' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiResponse({ status: 201, type: RegisterRO })
  @ApiOperation({ description: 'Post user register' })
  @Post('register')
  async register(@Body( new ValidationPipe(RegisterSchema)) body: RegisterDTO) {
    const registredUser = await this.userService.findByEmail(body.email);

    if (registredUser) {
      throw new BadRequestException(USER_ALREADY_EXISTS);
    }

    this.authService.register(body);
    return { success: true };
  }
}
