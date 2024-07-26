import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const ProductSchema = new Schema(
	{
		title: {type: String, required: true, unique: true},
		desc: {type: String, required: true},
		img: {type: String, required: true},
		categories: {type: Array},
		size: {type: Array},
		color: {type: Array},
		price: {type: Number, required: true},
		inStock: {type: Boolean, default: true},
	},
	{timestamps: true}
);

const Product = model('Product', ProductSchema);
export default Product;
