import express from 'express';
import { aboutDelete, aboutGet, aboutPost, aboutUpdate } from '../controllers/aboutMeController.js';

const router = express.Router();

router.post('/post', aboutPost);
router.get('/get', aboutGet);
router.put('/put', aboutUpdate);
router.patch('/delete', aboutDelete);

export default router;