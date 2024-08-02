import express from 'express';
import {
	loginController,
	registerController,
} from '../routeController/auth-controller.js';
import {body} from 'express-validator';
const router = express.Router();

router.post(
	'/register',
	[
		body('username').trim().notEmpty().withMessage('Please Enter Username'),
		body('email')
			.trim()
			.notEmpty()
			.withMessage('Please Enter Your Email')
			.isEmail()
			.withMessage('Please Enter Valid Email'),
		body('password')
			.notEmpty()
			.withMessage('Please Enter Password')
			.isLength({min: 6})
			.withMessage('Password must be minimum 6 characters')
			.isLength({max: 12})
			.withMessage('Password could not be more than 12 characters'),
	],
	registerController
);

//LOGIN

router.post(
	'/login',
	[
		body('email')
			.trim()
			.notEmpty()
			.withMessage('Please Enter Your Email')
			.isEmail()
			.withMessage('Please Enter Valid Email'),
		body('password').notEmpty().withMessage('Please Enter Password'),
	],
	loginController
);

export default router;
