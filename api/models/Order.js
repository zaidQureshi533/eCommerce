import mongoose from 'mongoose';

const {Schema, model} = mongoose;
import User from './User.js';
const OrderSchema = new Schema(
	{
		userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
		products: [],
		amount: {
			type: Number,
			required: true,
		},
		address: {
			type: {
				city: {type: String, required: true},
				country: {type: String, required: true},
				line1: {type: String, required: true},
				line2: {type: String, default: ''},
				postal_code: {type: String, required: true},
				state: {type: String, default: ''},
			},
			required: true,
		},
		status: {type: String, default: 'pending'},
	},
	{timestamps: true}
);

const Order = model('Order', OrderSchema);
export default Order;
