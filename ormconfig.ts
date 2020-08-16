import { ConnectionOptions } from 'typeorm';
import { Configuration } from './src/config/config.keys';

const config: ConnectionOptions = {
  type: 'postgres',
  host: Configuration.HOST,
  port: parseInt(Configuration.PORT),
  username: Configuration.USERNAME,
  password: Configuration.PASSWORD,
  database: Configuration.DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './migrations',
  },
};

export = config;
