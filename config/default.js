const env = process.env;

module.exports = {
  application: {
    call_timeout: 30,
    port: 5000,
    global_prefix: env.GLOBAL_PREFIX || 'v1'
  },
  database: {
    enable_ssl: env.ENABLE_SSL,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    logging: false,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    synchronize: true,
    type: "mysql",
    username: env.DB_USERNAME,
    migrationsRun: true,
  },
  session: {
    secret: env.SESSION_SECRET,
  }
};
