export default () => ({
  env: process.env.NODE_ENV,
  name: process.env.SERVICE_NAME,
  port: parseInt(process.env.PORT, 10) || 3000,
  secretKey: process.env.SECRET_KEY,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  log: {
    level: process.env.LOG_LEVEL,
    prettyPrint: process.env.LOG_PRETTY_PRINT,
    stream: process.env.LOG_STREAM
  }
})
