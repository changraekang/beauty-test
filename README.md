# beauty-test

db.js 를 만든다

const Client = require("pg").Pool;

const client = new Client({
  user: "db-Username",
  host: "rds-endpoint",
  database: "database-name",
  password: "db-password",
  port: 5432,
});

module.exports = client;
