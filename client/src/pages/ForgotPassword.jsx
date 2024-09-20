import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {publicRequest} from '../requestMethod';

const ForgotPassword = ({alert}) => {
	const [input, setInput] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	const handleInput = (e) => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
	};

	return (
		<div className='login-container w-svw h-svh flex items-center justify-center bg-cover bg-center p-4 md:p-0'>
			<div className='wrapper bg-white p-5 w-3/4 md:w-1/4 rounded-md'>
				<h3 className='title text-2xl font-light mb-5 text-center'>
					Reset Your Password
				</h3>

				<p className='text-[14px] mb-3 capitalize'>
					Enter your email address and we will send you a link to reset
					your password
				</p>
				<form action='' className='flex flex-col gap-4'>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='email'
						name='email'
						placeholder='Email'
						onChange={handleInput}
					/>
					<button
						disabled={isFetching}
						type='submit'
						className='w-full px-5 py-4 cursor-pointer font-bold mx-auto bg-teal-600 text-white hover:bg-teal-500 disabled:bg-green-600 disabled:cursor-not-allowed'
					>
						Continue
					</button>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
