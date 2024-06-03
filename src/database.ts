import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'corserva',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5433', 10),
  dialect: 'postgres',
};

if (env === 'test') {
  config.database = process.env.DB_NAME_TEST || 'corserva_test';
  config.host = process.env.DB_HOST_TEST || 'localhost';
  config.port = parseInt(process.env.DB_PORT_TEST || '5434', 10);
}

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: 'postgres',
  }
);
