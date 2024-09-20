import express from 'express';
import {verifyToken, verifyTokenAndAdmin} from './verifyToken.js';
import Order from '../models/Order.js';
const router = express.Router();

//CREATE

router.post('/', async (req, res) => {
	Order.create(req.body)
		.then(() => res.status(200).json(req.body))
		.catch((error) => {
			res.status(500).json(error);
		});
});

//GET USER ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, async (req, res) => {
	const productId = req.query.pid;
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{
				$match: {
					createdAt: {$gte: previousMonth},
					status: 'approved',
					...(productId && {products: {$elemMatch: {_id: productId}}}),
				},
			},
			{
				$unwind: '$products',
			},
			{
				$match: {...(productId && {'products._id': productId})},
			},
			{
				$project: {
					month: {$month: '$createdAt'},
					sales: {$sum: {$multiply: ['$products.price', '$products.quantity']}},
				},
			},
			{
				$group: {
					_id: '$month',
					total: {$sum: '$sales'},
				},
			},
			{
				$sort: {
					_id: 1,
				},
			},
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
