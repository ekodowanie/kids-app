import { ApiHideProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiHideProperty()
  email: string;

  @ApiHideProperty()
  pass: string;
}
