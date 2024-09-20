import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const KEY = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
	const authToken = req.headers['token'];
	if (authToken) {
		const token = authToken.split(' ')[1];
		jwt.verify(token, KEY, (err, data) => {
			if (err) 
			return res.status(403).json('Token is not valid!');
			else {
				req.user = data;
			}
			next();
		});
	} else {
		return res.status(401).json('You are not authenticated!');
	}
};

export const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json('You are not alowed to do that!');
		}
	});
};

export const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, async () => {
		const user = await User.findById(req.user.id);
		if (user._id === req.params.id || user.isAdmin) {
			next();
		} else {
		 res.status(403).json('You are not alowed to do that!');
		}
	});
};
