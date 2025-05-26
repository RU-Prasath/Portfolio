import express from 'express';
import { addService, deleteService, getService, updateService } from '../controllers/serviceController.js';

const router = express.Router();

router.post('/add', addService);
router.get('/get', getService);
router.put('/update/:id', updateService);
router.delete('/delete/:id', deleteService);

export default router;