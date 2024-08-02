import bcrypt from 'bcrypt';
import User from '../models/User.js';
import {validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

// Create User
const registerController = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(400)
			.json({success: false, message: errors.array()[0].msg});
	}
	try {
		const isUser = await User.findOne({email: req.body.email});
		if (isUser) {
			return res
				.status(400)
				.json({message: 'User already exist with this email'});
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		let newUser = await User.create({...req.body, password: hashedPassword});
		const user = await User.findOne({email: req.body.email});
		const token = jwt.sign({id: user._id}, secretKey);
		res
			.status(200)
			.json({success: true, message: 'Account created successfully', token});
	} catch (error) {
		res.status(500).send({message: error.message});
	}
};

const loginController = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(400)
			.json({success: false, message: errors.array()[0].msg});
	}
	try {
		const user = await User.findOne({email: req.body.email});
		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'Try to login with correct credentials',
			});
		}
		const comparePassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!comparePassword) {
			return res.status(400).json({
				success: false,
				message: 'Try to login with correct credentials',
			});
		}
		const accessToken = jwt.sign(
			{id: user._id, isAdmin: user.isAdmin},
			secretKey,
			{expiresIn: '3d'}
		);
		const {password, ...others} = user._doc;
		res.status(200).json({...others, accessToken});
	} catch (error) {
		res.status(500).send({message: error.message});
	}
};

export {registerController, loginController};
