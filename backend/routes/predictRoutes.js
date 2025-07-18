import express from 'express'
import { predictProstateCancer } from '../controllers/predictController.js'


const predictRouter = express.Router()


predictRouter.post('/predict', predictProstateCancer)

export default predictRouter