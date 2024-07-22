import React from 'react';
import {useForm} from 'react-hook-form';
const Register = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	return (
		<div className='register-container w-svw h-svh flex items-center justify-center bg-cover bg-center bg-no-repeat'>
			<div className='wrapper bg-white p-5 w-3/4 md:w-1/3 rounded-md '>
				<h1 className='title text-2xl font-light mb-5 text-center'>
					CREATE ACCOUNT
				</h1>
				<form
					onSubmit={handleSubmit}
					action=''
					className='flex flex-wrap gap-4'
				>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='text'
						placeholder='name'
						{...register('name', {required: 'name is required'})}
					/>
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='text'
						placeholder='last name'
						{...register('name', {required: 'lastname is required'})}
					/>
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
					<input
						className='flex-1 min-w-[40%] p-[15px] border border-gray-500 rounded-sm text-sm font-light'
						type='password'
						name='confirm-password'
						placeholder='confirm password'
						{...register('confirmPassword', {
							required: 'Please Enter Confirm Password',
						})}
					/>
					<span className='text-xs my-5'>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</span>
					<button type='submit' className='w-3/5 px-5 py-4 cursor-pointer font-bold mx-auto bg-teal-600 text-white hover:bg-teal-500'>
						CREATE
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
