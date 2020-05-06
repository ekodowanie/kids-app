import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserRO {
    @Expose()
    @ApiProperty({ type:  'string' })
    id: string;

    @Expose()
    @ApiProperty({ type:  'string', required: false })
    name: string;
}
