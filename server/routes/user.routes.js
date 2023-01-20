import { Router } from 'express'
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.js'

const userRouter = Router()

// Get all users
userRouter.get('/', getUsers)

// Get a user
userRouter.get('/:id', getUserById)

// Create a user
userRouter.post('/', createUser)

// Update a user
userRouter.put('/:id', updateUser)

// Delete a user
userRouter.delete('/:id', deleteUser)

export { userRouter }
