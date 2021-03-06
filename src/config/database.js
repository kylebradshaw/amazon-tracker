import url from "url";

const postgres = "postgres";

const urlParser = dbUrl => {
  if (!dbUrl) return null;

  const dbURL = url.parse(dbUrl);
  const authArr = dbURL.auth.split(":");
  const hostArr = dbURL.host.split(":");

  return {
    database: dbURL.path.substring(1),
    username: authArr[0],
    password: authArr[1],
    host: hostArr[0],
    port: hostArr[1],
    dialect: postgres,
    protocol: postgres
  };
};

const dbConfig = urlParser(process.env.DATABASE_URL);

module.exports = urlParser;
module.exports = {
  development: {
    username: null,
    password: null,
    database: "name_game_development",
    host: "127.0.0.1",
    dialect: postgres
  },
  test: {
    username: null,
    password: null,
    database: "name_game_test",
    host: "127.0.0.1",
    dialect: postgres
  },
  staging: dbConfig || {
    url: process.env.DATABASE_URL,
    dialect: postgres
  },
  production: dbConfig || {
    url: process.env.DATABASE_URL,
    dialect: postgres
  }
};
