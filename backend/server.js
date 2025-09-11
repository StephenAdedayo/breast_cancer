import express from 'express'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import predictRouter from './routes/predictRoutes.js'
import cors from 'cors'
import tipsRouter from './routes/tipsRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import predictBreastRouter from './routes/predictBreastRoutes.js'

const app = express()
connectDB()
connectCloudinary()


const port = process.env.PORT || 5050

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter)
app.use("/api/model", predictRouter)
app.use("/api/model", predictBreastRouter)
app.use("/api/tips", tipsRouter)


app.get("/", (req, res) => res.json({message: "API WORKING"}))

app.listen(port, () => {
    console.log(`server started successfully on port ${port}`)
})

