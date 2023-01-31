import { Router } from 'express'
import { categoryRouter } from './category/category.routes.js'
import { userRouter } from './user/user.routes.js'

const router = Router()

router.use('/user', userRouter)
router.use('/category', categoryRouter)

export { router }
