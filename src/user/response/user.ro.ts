import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ROLES } from '../entities/user.entity';

@Exclude()
export class UserRO {
  @Expose()
  @ApiProperty({ type:  'string' })
  id: string;

  @Expose()
  @ApiProperty({ type:  'string', required: false })
  name: string;

  @Expose()
  @ApiProperty({ type:  'string', required: false })
  surname: string;

  @Expose()
  @ApiProperty({ type:  'boolean', required: false })
  active: boolean;

  @Expose()
  @ApiProperty({ type:  'string' } )
  email: string;

  @Expose()
  @ApiProperty({ type:  'string' } )
  phone: string;

  @Expose()
  @ApiProperty({ type:  'string', required: false })
  dateOfBirth: string;

  @Expose()
  @ApiProperty({ type:  'string', required: false })
  address: string;

  @Expose()
  @ApiProperty({ enum: [ROLES.USER, ROLES.ADMIN]})
  role: ROLES;
}
