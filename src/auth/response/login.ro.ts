import { Exclude } from 'class-transformer';
import { SuccessRO } from '../../common/response/success.ro';

@Exclude()
export class LoginRO extends SuccessRO {
}
