import { Router } from 'express'
import { userRouter } from './user/user.routes.js'
import { categoryRouter } from './category/category.routes.js'

const router = Router()

router.use('/user', userRouter)
router.use('/category', categoryRouter)

export { router }
