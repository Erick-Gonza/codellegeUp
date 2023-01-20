import { createPool } from 'mysql2/promise'

const password = process.env.PASSWORD
const dbName = process.env.DB_NAME

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: password,
  database: dbName,
  port: 3306,
  connectionLimit: 10,
})
