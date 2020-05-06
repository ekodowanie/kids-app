import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SuccessRO {
  @Expose()
  @ApiHideProperty()
  readonly success: boolean;
}
