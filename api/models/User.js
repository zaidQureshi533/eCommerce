import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const UserSchema = new Schema(
	{
		username: {type: String, required: true},
		email: {type: String, required: true, unique: true},
		password: {type: String, required: true},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		img: {type: String},
	},
	{timestamps: true}
);

const User = model('User', UserSchema);
export default User;
