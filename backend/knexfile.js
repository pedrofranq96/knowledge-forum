module.exports = {
  client: 'pg',
  connection: {
    database: 'knowladge',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 20
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
