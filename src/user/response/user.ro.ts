import {ApiModelProperty} from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {ROLES} from '../entities/user.entity';

@Exclude()
export class UserRO {
  @Expose()
  @ApiModelProperty({ type:  'string' })
  id: string;

  @Expose()
  @ApiModelProperty({ type:  'string', required: false })
  name: string;

  @Expose()
  @ApiModelProperty({ type:  'string', required: false })
  surname: string;

  @Expose()
  @ApiModelProperty({ type:  'boolean', required: false })
  active: boolean;

  @Expose()
  @ApiModelProperty({ type:  'string' } )
  email: string;

  @Expose()
  @ApiModelProperty({ type:  'string' } )
  phone: string;

  @Expose()
  @ApiModelProperty({ type:  'string', required: false })
  dateOfBirth: string;

  @Expose()
  @ApiModelProperty({ type:  'string', required: false })
  address: string;

  @Expose()
  @ApiModelProperty({ enum: [ROLES.USER, ROLES.ADMIN]})
  role: ROLES;
}
