//Importando as dependencias
import 'dotenv/config';
import path from 'path';

const config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve('src/Database/Migrations'),
  },
  seeds: {
    tableName: "knex_seeds",
    directory: path.resolve('src/Database/Seeds'),
  }
};

export default config;
