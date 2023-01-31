// Description: This file contains the functions that will be used to interact with the database

import { handleHttpError } from '../../utils/error.handle.js'

// Get all categories
const getCategories = async (req, res) => {
  try {
    const response = await serviceCategory()
    if (response === undefined) res.send({ message: 'No categories found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get categories")
  }
}

// Get category by id
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceCategoryId(id)
    if (response === undefined) res.send({ message: 'No category found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get category")
  }
}

// Create a category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body
    const response = await serviceCategoryCreate(name)
    res.json({
      id: response.insertId,
      name,
    })
  } catch (error) {
    handleHttpError(res, "Can't create category")
  }
}

// Update a category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { name, lastname, username, email, password, role } = req.body
    const response = await serviceCategoryUpdate(id, name)
    res.json({
      name,
    })
  } catch (error) {
    handleHttpError(res, "Can't update category")
  }
}

// Delete a user
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceCategoryDelete(id)
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
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}
