import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    console.log(roles);

    if (!roles || roles.length < 1) {
      return true;
    }
    console.log(context.switchToHttp().getRequest())
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log(user);

    return true;
    // return roles.some(role => role === user.role);
  }

}