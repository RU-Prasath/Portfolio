import express from 'express'
import { sendMail } from '../controllers/contactController.js'

const router = express.Router()

router.post('/contact', sendMail);

export default router;