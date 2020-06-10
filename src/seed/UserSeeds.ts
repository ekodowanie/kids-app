import { Connection } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { predefinedAdmin, predefinedUser } from '../test/mocks/entity/consts';

export class UserSeeds {
  private readonly users = [];

  constructor() {
    this.users.push(predefinedAdmin);
    this.users.push(predefinedUser);
  }

  public async run(connection: Connection) {
    const userRepository = connection.getRepository(UserEntity);
    const users = await userRepository.find();

    if (users.length === 0) {
      await userRepository.insert(this.users);
    }
  }
}
