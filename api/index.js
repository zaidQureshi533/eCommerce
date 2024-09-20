import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import cartRoute from './routes/cart.js';
import orderRoute from './routes/order.js';
import productRoute from './routes/product.js';
import stripeRoute from './routes/stripe.js';
import userRoute from './routes/user.js';
import mailRoute from './routes/mail.js';
import categoryRoute from './routes/category.js';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import multer from 'multer';
import {verifyTokenAndAdmin} from './routes/verifyToken.js';

const app = express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

// connect to mongoDB

const mongoUrl = process.env.MONGO_URL;
mongoose
	.connect(mongoUrl)
	.then(() =>
		app.listen(port, () => {
			console.log(`Backend is running on port ${port}`);
		})
	)
	.catch((err) => {
		console.log(err);
	});

// Configure Public Folder
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const PublicPath = `${_dirname}/../uploads`;
app.use('/images', express.static(PublicPath));

//config routes
app.use('/api/auth', authRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/products', productRoute);
app.use('/api/checkout', stripeRoute);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/checkout', stripeRoute);
app.use('/api/mail', mailRoute);

//UPLOAD IMAGES

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, PublicPath);
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({storage});
app.post(
	'/api/upload',
	verifyTokenAndAdmin,
	upload.single('file'),
	(req, res) => {
		try {
			return res.status(200).json('File uploaded successfully');
		} catch (error) {
			console.error(error);
		}
	}
);
