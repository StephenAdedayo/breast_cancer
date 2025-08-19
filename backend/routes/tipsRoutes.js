import express from 'express'
import { addTips, getAllTips, removeTips } from '../controllers/tipsController.js'
import upload from '../middlewares/multer.js'

const tipsRouter = express.Router()


tipsRouter.post("/add", upload.single("authorImage"), addTips)
tipsRouter.post('/get', getAllTips)
tipsRouter.post('/remove', removeTips)


export default tipsRouter