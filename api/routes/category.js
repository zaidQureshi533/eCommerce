import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

//CREATE CATEGORY

router.post('/', (req, res) => {
	try {
		const newCategory = req.body;
		Category.create(newCategory);
		res.status(200).send('Category Added Successfully');
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET CATEGORIES

router.get('/', async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json(error);
	}
});

// DELETE CATEGORY

router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		await Category.findByIdAndDelete(id);
		res.status(200).send('Category Deleted');
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
