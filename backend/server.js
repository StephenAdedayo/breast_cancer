import express from 'express'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import predictRouter from './routes/predictRoutes.js'

const app = express()
connectDB()


const port = process.env.PORT

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/model", predictRouter)


app.get("/", (req, res) => res.json({message: "API WORKING"}))

app.listen(port, () => {
    console.log(`server started successfully on port ${port}`)
})

