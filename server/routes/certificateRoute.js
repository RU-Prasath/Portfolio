import express from 'express';
import { addCertificate, deleteCertificate, getCertificate, updateCertificate } from '../controllers/certificateController.js';

const router = express.Router();

router.post('/add', addCertificate);
router.get('/get', getCertificate);
router.put('/update/:id', updateCertificate);
router.delete('/delete/:id', deleteCertificate);

export default router;