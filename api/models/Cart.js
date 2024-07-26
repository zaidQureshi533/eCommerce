import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const CartSchema = new Schema(
	{
		userId: {type: String, required: true},
		products: [
			{
				productId: {
					type: String,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
	},
	{timestamps: true}
);

const Cart = model('Cart', CartSchema);

export default Cart;
