import express from 'express'
import { predictBreastCancer } from '../controllers/predictBreastController.js'


const predictBreastRouter = express.Router()


predictBreastRouter.post('/predictBreast', predictBreastCancer)

export default predictBreastRouter