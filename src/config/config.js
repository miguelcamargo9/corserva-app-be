module.exports = {
  development: {
    username: 'user',
    password: 'password',
    database: 'corserva',
    host: '127.0.0.1',
    port: 5433,
    dialect: 'postgres',
  },
  test: {
    username: 'user',
    password: 'password',
    database: 'corserva_test',
    host: '127.0.0.1',
    port: 5434,
    dialect: 'postgres',
  },
  production: {
    username: 'user',
    password: 'password',
    database: 'corserva',
    host: '127.0.0.1',
    port: 5433,
    dialect: 'postgres',
  },
};
