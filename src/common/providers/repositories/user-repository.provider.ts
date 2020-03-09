import { Connection } from 'typeorm';
import { DI_CONSTANTS } from '../../constants/di.constants';
import { UserRepository } from '../../../user/repositories/user.repository';

export const UserRepositoryProvider = {
    provide: DI_CONSTANTS.USER,
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: [Connection],
};
