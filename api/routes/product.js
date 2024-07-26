import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();

//GET PRODUCT
router.get('/:id', async (req, res) => {
	try {
		const productId = req.params.id;
		const product = await Product.findById(productId);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
});
//GET ALL PRODUCTS
router.get('/', async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let products;
		if (qNew) {
			products = await Product.find().sort({createdAt: -1}).limit(1);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
