require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "hazerdb.ddns.net",
      port: "5432",
      user: "postgres",
      password: "adev4life",
      database: "IdeaBox",
      ssl: true
    }
    // connection: 'postgres://localhost:8080'

    // connection: {
    //   host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   ssl: process.env.DB_SSL
    // }
  },
  production: {
    client: 'pg',
    connection: {
      host: "hazerdb.ddns.net",
      port: "5432",
      user: "postgres",
      password: "adev4life",
      database: "IdeaBox",
      ssl: true
    }
  }
};
