import { pool } from '../database.js'

const serviceUsers = async () => {
  const [result] = await pool.query('SELECT * FROM user')
  return result
}

const serviceUserId = async (id) => {
  const [result] = await pool.query('SELECT * FROM user WHERE id = ?', [id])
  return result
}

const serviceUserCreate = async (name, lastName, email, password) => {
  const [result] = await pool.query(
    'INSERT INTO user (name, lastName, email, password) VALUES (?,?,?,?)',
    [name, lastName, email, password]
  )
  return result
}

const serviceUserUpdate = async (id, name, email, password) => {
  const [result] = await pool.query(
    'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id]
  )
  return result
}

const serviceUserDelete = async (id) => {
  const [result] = await pool.query('DELETE FROM user WHERE id = ?', [id])
  if (result.affectedRows === 0) return undefined
  return result
}

export {
  serviceUsers,
  serviceUserId,
  serviceUserCreate,
  serviceUserUpdate,
  serviceUserDelete,
}
