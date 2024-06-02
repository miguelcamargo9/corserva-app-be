import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgres://user:password@localhost:5433/corserva'
);
