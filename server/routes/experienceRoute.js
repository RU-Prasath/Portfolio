import express from 'express'
import { addExperience, deleteExperience, getExperience, updateExperience } from '../controllers/experienceController.js';

const router = express.Router();

router.post('/add', addExperience);
router.get('/get', getExperience);
router.put('/update/:id', updateExperience);
router.delete('/delete/:id', deleteExperience);

export default router;