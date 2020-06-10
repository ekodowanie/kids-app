import { createConnection } from 'typeorm';
import { Logger } from '@nestjs/common';
import { get } from 'config';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { createUsers } from '../test/mocks/entity/user.mock';

(async () => {
  const config: ConnectionOptions = get('database');
  const connection = await createConnection({
    ...config,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  });

  try {
    createUsers();
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }

  process.exit();
})();
