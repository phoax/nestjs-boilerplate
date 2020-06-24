export default () => ({
  env: process.env.NODE_ENV,
  name: process.env.APP_NAME,
  port: parseInt(process.env.PORT, 10) || 3000,
  secretKey: process.env.SECRET_KEY,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
  },
  log: {
    level: process.env.LOG_LEVEL,
    prettyPrint: process.env.LOG_PRETTY_PRINT,
    stream: process.env.LOG_STREAM
  }
})
