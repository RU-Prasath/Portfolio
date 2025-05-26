import express from 'express';
import { loginAdmin, registerAdmin, requestPasswordReset, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/request-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

export default router;