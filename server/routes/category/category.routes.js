import { Router } from 'express'
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from '../../controllers/category/category.controller.js'

const categoryRouter = Router()

// Get all categories
categoryRouter.get('/', getCategories)

// Get a category
categoryRouter.get('/:id', getCategoryById)

// Create a category
categoryRouter.post('/', createCategory)

// Update a category
categoryRouter.put('/:id', updateCategory)

// Delete a category
categoryRouter.delete('/:id', deleteCategory)

export { categoryRouter }
