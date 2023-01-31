// import { pool } from '../../database.js'

// const serviceProduct = async () => {
//   const query = 'SELECT * FROM PRODUCT'
//   const [result] = await pool.query(query)
//   return result
// }

// const serviceProductById = async (id) => {
//   const query = 'SELECT * FROM PRODUCT WHERE id = ?'
//   const [result] = await pool.query(query, [id])
//   return result
// }

// const serviceProductCreate = async (
//   name,
//   price,
//   description,
//   stock,
//   category_id
// ) => {
//   const query =
//     'INSERT INTO PRODUCT (name, price, description, stock, category_id) VALUES (?,?,?,?,?)'
//   const [result] = await pool.query(query, [
//     name,
//     price,
//     description,
//     stock,
//     category_id,
//   ])
//   return result
// }

// const serviceProductUpdate = async (
//   id,
//   name,
//   price,
//   description,
//   stock,
//   category_id
// ) => {
//   const query =
//     'UPDATE PRODUCT SET name = ?, price = ?, description = ?, stock = ?, category_id= ? WHERE id = ?'
//   const [result] = await pool.query(query, [
//     name,
//     price,
//     description,
//     stock,
//     category_id,
//     id,
//   ])
//   return result
// }

// const serviceProductDelete = async (id) => {
//   const query = 'DELETE FROM PRODUCT WHERE id = ?'
//   const [result] = await pool.query(query, [id])
//   if (result.affectedRows === 0) return undefined
//   return result
// }

// export {
//   serviceProduct,
//   serviceProductById,
//   serviceProductCreate,
//   serviceProductUpdate,
//   serviceProductDelete,
// }
