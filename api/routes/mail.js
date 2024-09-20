import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/resetlink', async (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // true for port 465
		auth: {
			user: '',
			pass: '',
		},
	});
	const mailOptions = {
		from: 'zaidqureshi0308@gmail.com',
		to: 'zaidqureshia.1995@gmail.com',
		subject: 'Reset Password',
	};
	await transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            return res.status(500).json(err)
        }else {
            return res.status(200).json({info: info.messageId})
        }
    });
});

export default router;
