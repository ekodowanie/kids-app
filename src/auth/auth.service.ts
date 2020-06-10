import { Injectable } from '@nestjs/common';
import { UserService } from '../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import { RegisterDTO } from './request/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async register(userData: RegisterDTO): Promise<UserEntity> {
    return await this.userService.create(userData);
  }

  async login(user: any): Promise<any> {
    const payload = { id: user.id, username: user.email, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}