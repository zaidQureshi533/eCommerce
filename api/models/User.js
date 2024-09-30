import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const UserSchema = new Schema(
	{
		username: {type: String, required: true},
		email: {type: String, required: true, unique: true, lowercase: true},
		password: {type: String, required: true},
		img: {type: String},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{timestamps: true}
);

// UserSchema.virtual('name').get(() => `${this.username}`);

// UserSchema.set('toJSON', {virtuals: true});
// UserSchema.set('toObject', {virtuals: true});

const User = model('User', UserSchema);
export default User;
