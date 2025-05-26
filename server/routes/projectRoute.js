import express from 'express';
import { addProject, deleteProject, getProject, updateProject } from '../controllers/projectController.js';

const router = express.Router();

router.post('/add', addProject);
router.get('/get', getProject);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

export default router;