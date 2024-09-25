import express from 'express';
import Product from '../models/Product.js';
import {verifyTokenAndAdmin} from './verifyToken.js';

const router = express.Router();

//CREATE PRODUCT

router.post('/', verifyTokenAndAdmin, async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET PRODUCT
router.get('/find/:id', async (req, res) => {
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
	const category = req.query.category;
	try {
		let products;
		if (qNew) {
			products = await Product.find().sort({createdAt: -1}).limit(1);
		} else if (category) {
			products = await Product.find({
				categories: {
					$in: [category],
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

// DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		res.status(500).json(err);
	}
});

// UPDATE PRODUCT
router.patch('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndUpdate(req.params.id, req.body);
		const product = await Product.findOne({_id: req.params.id});
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
