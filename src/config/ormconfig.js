// const entities = [
//   __dirname + '/models/entities/UserEntity{.ts,.js}',
//   __dirname + '/models/entities/ItemEntity{.ts,.js}',
// ]

const entities = [
  'dist/models/entities/UserEntity{.ts,.js}',
  'dist/models/entities/ItemEntity{.ts,.js}',
]

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: entities,
  //   migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}
