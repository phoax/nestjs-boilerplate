import { ConnectionOptions } from 'typeorm'

// const database: ConnectionOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'Welcome01',
//   database: 'postgres',
//   entities: [__dirname + '/../**/*Entity{.ts,.js}'],
//   synchronize: true
// }

export const database = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Welcome01',
  database: 'postgres',
  entities: [__dirname + '/../**/*Entity{.ts,.js}'],
  synchronize: true
}
