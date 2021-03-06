require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "buddy_system_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "buddy_system_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  }
};
