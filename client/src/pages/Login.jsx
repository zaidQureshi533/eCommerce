import React from 'react';
import {useForm} from 'react-hook-form';
import {login} from '../store/apiCalls';
import {useDispatch, useSelector} from 'react-redux';
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const dispatch = useDispatch();
	const {isFetching, error} = useSelector((state) => state.user);
	const handleLogin = (data) => {
		login(dispatch, data);
	};
	return (
		<div className='login-container w-svw h-svh flex items-center justify-center bg-cover bg-center p-4 md:p-0'>
			<div className='wrapper bg-white p-5 w-3/4 md:w-1/4 rounded-md'>
				<h1 className='title text-2xl font-light mb-5 text-center'>SIGN IN</h1>
				<form
					onSubmit={handleSubmit(handleLogin)}
					action=''
					className='flex flex-col gap-4'
				>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='text'
						placeholder='username'
						{...register('username', {required: 'username is required'})}
					/>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='email'
						name='email'
						placeholder='email'
						{...register('email', {required: 'email is required'})}
					/>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='password'
						name='password'
						placeholder='password'
						{...register('password', {required: 'Please Enter Password'})}
					/>
					<button
						disabled={isFetching}
						type='submit'
						className='w-3/5 px-5 py-4 cursor-pointer font-bold mx-auto bg-teal-600 text-white hover:bg-teal-500 disabled:bg-green-600 disabled:cursor-not-allowed'
					>
						LOGIN
					</button>
					{error && <span className='text-red-600'>Something went wrong...</span>}
					<a className='text-xs underline cursor-pointer'>
						DO NOT YOU REMEMBER THE PASSWORD?
					</a>
					<a className='text-xs underline cursor-pointer'>
						CREATE A NEW ACCOUNT
					</a>
				</form>
			</div>
		</div>
	);
};

export default Login;
