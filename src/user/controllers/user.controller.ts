import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

@Get()
async getMyProfile() {
  return [
    {
      name: 'test'
    }
  ];
}

}