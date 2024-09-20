import express from 'express';
import {verifyTokenAndAdmin, verifyToken} from './verifyToken.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

// GET ALL USERS

router.get('/', verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({_id: -1}).limit(5)
			: await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET USER STATS

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
	try {
		const data = await User.aggregate([
			{$match: {isAdmin: false, createdAt: {$gte: lastYear}}},
			{
				$project: {
					month: {$month: '$createdAt'},
				},
			},
			{
				$group: {
					_id: '$month',
					total: {$sum: 1},
				},
			},
			{
				$sort: {_id: 1},
			},
		]);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
