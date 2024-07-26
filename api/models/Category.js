import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const CategorySchema = new Schema(
	{
		img: {type: String, required: true},
		title: {type: String, required: true},
	},
	{timestamps: true}
);

const Category = model('Category', CategorySchema);
export default Category;
