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
import categoryRoute from './routes/category.js';
import {fileURLToPath} from 'url'; // To convert URL to file path
import {dirname} from 'path'; // To get directory name

const app = express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

//config routes
app.use('/api/auth', authRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/products', productRoute);
app.use('/api/checkout', stripeRoute);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);

// Configure Public Folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PublicPath = `${__dirname}/../uploads`;
app.use('/images', express.static(PublicPath));

// connect to mongoDB
const connectToDb = () => {
	mongoose
		.connect(process.env.MONGO_URL)
		.then(() => console.log('DB Connection Successfull!'))
		.catch((err) => {
			console.log(err);
		});
};
connectToDb();

app.listen(port, () => {
	console.log(`Backend is running on port ${port}`);
});
