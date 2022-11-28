import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { allowCors } from './cfg'
import router from './src/routers/router'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        origin: allowCors,
    })
)
app.use('/api/v1/', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
