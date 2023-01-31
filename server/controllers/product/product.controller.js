// Description: This file contains the functions that will be used to interact with the database

import {
  serviceProduct,
  serviceProductById,
  serviceProductCreate,
  serviceProductDelete,
  serviceProductUpdate,
} from '../../services/product/product.js'
import { handleHttpError } from '../../utils/error.handle.js'

// Get all products
const getProducts = async (req, res) => {
  try {
    const response = await serviceProduct()
    if (response === undefined) res.send({ message: 'No categories found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get categories")
  }
}

// Get product by id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceProductById(id)
    if (response === undefined) res.send({ message: 'No category found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get category")
  }
}

// Create a product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, category_id } = req.body
    const response = await serviceProductCreate(
      name,
      price,
      description,
      stock,
      category_id
    )
    res.json({
      id: response.insertId,
      name,
      description,
      stock,
    })
  } catch (error) {
    handleHttpError(res, "Can't create category")
  }
}

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, price, description, stock, category_id } = req.body
    const response = await serviceProductUpdate(id, name)
    res.json({
      name,
      price,
      description,
      stock,
    })
  } catch (error) {
    handleHttpError(res, "Can't update category")
  }
}

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceProductDelete(id)
    if (response === undefined) {
      res.json({ message: 'Category not found' })
    } else {
      res.json({ message: 'Category deleted' })
    }
  } catch (error) {
    handleHttpError(res, "Can't delete Category")
  }
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
