const entities = [
    'dist/src/data/entities/UserEntity{.ts,.js}',
    'dist/src/data/entities/ItemEntity{.ts,.js}',
]

module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: entities,
    migrations: ["dist/src/migration/*.js"],
    cli: {
        migrationsDir: "src/migration"
    }
}