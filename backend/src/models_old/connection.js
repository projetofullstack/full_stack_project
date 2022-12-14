const mysql2 = require('mysql2/promise');

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const connection = mysql2.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

// MYSQL_HOST é igual a db pois queremos o acesso a rede interna do Docker
// Ao contrario do localhost:3306 que é uma rede externa

module.exports = connection;
