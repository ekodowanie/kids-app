import { getConnection } from 'typeorm';
import { UserSeeds } from '../../../seed/UserSeeds';

export const createUsers = async () => {
  const userSeed = new UserSeeds();
  await userSeed.run(getConnection());
};
