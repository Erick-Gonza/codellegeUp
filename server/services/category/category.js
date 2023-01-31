import { pool } from '../../database.js'

const serviceCategory = async () => {
  const query = 'SELECT * FROM CATEGORY'
  const [result] = await pool.query(query)
  return result
}

const serviceCategoryId = async (id) => {
  const query = 'SELECT * FROM CATEGORY WHERE id = ?'
  const [result] = await pool.query(query, [id])
  return result
}

const serviceCategoryCreate = async (name) => {
  const query = 'INSERT INTO CATEGORY (name) VALUES (?)'
  const [result] = await pool.query(query, [name])
  return result
}

const serviceCategoryUpdate = async (id, name) => {
  const query = 'UPDATE CATEGORY SET name = ? WHERE id = ?'
  const [result] = await pool.query(query, [name, id])
  return result
}

const serviceCategoryDelete = async (id) => {
  const query = 'DELETE FROM CATEGORY WHERE id = ?'
  const [result] = await pool.query(query, [id])
  if (result.affectedRows === 0) return undefined
  return result
}

export {
  serviceCategory,
  serviceCategoryId,
  serviceCategoryCreate,
  serviceCategoryUpdate,
  serviceCategoryDelete,
}
