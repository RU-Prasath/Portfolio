import express from 'express';
import { addStudy, deleteStudy, getStudy, updateStudy } from '../controllers/StudiesController.js';

const router = express.Router();

router.post('/add', addStudy);
router.get('/get', getStudy);
router.put('/update/:id', updateStudy);
router.delete('/delete/:id', deleteStudy);

export default router;