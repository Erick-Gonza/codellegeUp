import { Sequelize } from 'sequelize'

const db = new Sequelize('test', 'root', 'gonzapassword', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
})

try {
  await db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export { db }
