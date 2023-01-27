import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes/index.routes.js'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

//Main route
app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
