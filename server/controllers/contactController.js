import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD
    }
})

export const sendMail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const mailOptionsToYou = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h3>Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `
    }

    const mailOptionsToSender = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
            <p>Hi ${name},</p>
            <p>Thank you for reaching out! I have received your message and will get back to you within 1 day.</p>
            <p>Best regards,<br/>Prasath</p>
        `
    };

    try {
         await transporter.sendMail(mailOptionsToYou);
        await transporter.sendMail(mailOptionsToSender);
        res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
}