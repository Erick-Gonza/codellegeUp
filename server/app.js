import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/index.routes.js'
import { db } from '../database/db.js'
import { Category } from './models/index.js'
import { Product } from './models/index.js'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))

//Main route
app.use('/api', router)

await db.sync({ force: true }).then(
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
)
