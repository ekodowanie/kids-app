import { ApiHideProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiHideProperty()
  email: string;

  @ApiHideProperty()
  password: string;

  @ApiHideProperty()
  name: string;
}
