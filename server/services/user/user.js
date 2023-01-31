import { pool } from '../../database.js'

const serviceUsers = async () => {
  const query = 'SELECT * FROM USER'
  const [result] = await pool.query(query)
  return result
}

const serviceUserId = async (id) => {
  const query = 'SELECT * FROM USER WHERE id = ?'
  const [result] = await pool.query(query, [id])
  return result
}

// id, name, lastName, username, email, password, role
const serviceUserCreate = async (
  name,
  lastname,
  username,
  email,
  password,
  role
) => {
  const query =
    'INSERT INTO USER ( name, lastname, username, email, password, role) VALUES (?,?,?,?,?,?)'
  const [result] = await pool.query(query, [
    name,
    lastname,
    username,
    email,
    password,
    role,
  ])
  return result
}

const serviceUserUpdate = async (
  id,
  name,
  lastname,
  username,
  email,
  password,
  role
) => {
  const query =
    'UPDATE USER SET name = ?, lastname = ?, username = ?, email = ?, password = ?, role = ? WHERE id = ?'
  const [result] = await pool.query(query, [
    name,
    lastname,
    username,
    email,
    password,
    role,
    id,
  ])
  return result
}

const serviceUserDelete = async (id) => {
  const query = 'DELETE FROM USER WHERE id = ?'
  const [result] = await pool.query(query, [id])
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
