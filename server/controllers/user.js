// Description: This file contains the functions that will be used to interact with the database

import { handleHttpError } from '../utils/error.handle.js'
import {
  serviceUserCreate,
  serviceUserDelete,
  serviceUserId,
  serviceUsers,
  serviceUserUpdate,
} from '../services/user.js'

// Get all users
const getUsers = async (req, res) => {
  try {
    const response = await serviceUsers()
    if (response === undefined) res.send({ message: 'No users found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get users")
  }
}

// Get user by id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceUserId(id)
    if (response === undefined) res.send({ message: 'No user found' })
    res.json(response)
  } catch (error) {
    handleHttpError(res, "Can't get user")
  }
}

// Create a user
const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body
    const response = await serviceUserCreate(name, lastName, email, password)
    res.json({
      id: response.insertId,
      name,
      email,
    })
  } catch (error) {
    handleHttpError(res, "Can't create user")
  }
}

// Update a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, lastName, email, password } = req.body
    const response = await serviceUserUpdate(
      id,
      name,
      lastName,
      email,
      password
    )
    res.json({
      name,
      lastName,
      email,
      password: '********',
    })
  } catch (error) {
    handleHttpError(res, "Can't update user")
  }
}

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const response = await serviceUserDelete(id)
    if (response === undefined) {
      res.json({ message: 'User not found' })
    } else {
      res.json({ message: 'User deleted' })
    }
  } catch (error) {
    handleHttpError(res, "Can't delete user")
  }
}

export { getUsers, getUserById, createUser, updateUser, deleteUser }
