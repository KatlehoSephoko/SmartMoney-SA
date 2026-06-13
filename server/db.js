const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "financial_platform",
  password: "password",
  port: 5432,
});

module.exports = pool;