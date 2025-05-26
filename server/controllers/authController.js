import adminModel from '../models/adminModel.js'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

const JWT_Secret = process.env.JWT_Secret || 'Prasathru14!'

export const registerAdmin = async (req, res) => {
    const { username, password } = req.body;
    const existing = await adminModel.findOne({ username });
    if (existing) {
        res.status(400).json({success: false, error: 'Admin already exists.'})
    }
    const hashed = await bcrypt.hash(password, 10);
    const admin = new adminModel({ username, password: hashed });
    await admin.save();
    res.json({message: 'Admin Created Successfully.'})
};

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await adminModel.findOne({ username });
    if (!admin) {
        res.status(400).json({success: false, error: 'Invalid credentials'});
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        res.status(400).json({success: false, error: 'Invalid credentials'});
    }

    const token = jwt.sign({ id: admin._id}, JWT_Secret, { expiresIn: '1h'});
    res.json({ token })
};

export const requestPasswordReset = async (req, res) => {
    const { username } = req.body;
    const admin = await adminModel.findOne({ username });
    if (!admin) {
        res.status(404).json({success: false, error: 'Not found.'});
    }

    const token = crypto.randomBytes(32).toString('hex');
    admin.resetToken = token;
    admin.resetTokenExpiration = Date.now() + 3600000;
    await admin.save();

    res.json({ resetToken: token });
};

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    const admin = await adminModel.findOne({
        resetToken: token,
        resetTokenExpiration: { $gt: Date.now() },
    });

    if (!admin) {
        res.status(400).json({success: false, error: 'Invalid or Expired token'});
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    admin.password = hashed;
    admin.resetToken = undefined;
    admin.resetTokenExpiration = undefined;
    await admin.save();

    res.json({ message: 'Password reset successfully.' });
}