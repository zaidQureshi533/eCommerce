import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {publicRequest} from '../requestMethod';
const Register = ({alert}) => {
	const [isFetching, setIsFetching] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const handleRegister = async (data) => {
		if (data.password !== data.confirmPassword) {
			alert(
				'danger',
				"Password doesn't match, please ensure password and confirm password must be same"
			);
		} else {
			const {confirmPassword, ...userData} = data;
			setIsFetching(true);
			publicRequest
				.post('/auth/register', userData)
				.then((res) => {
					setIsFetching(false);
					alert('success', res.data.message);
					navigate('/login');
				})
				.catch((error) => {
					alert('danger', error.response.data.message);
				});
		}
	};
	return (
		<div className='register-container w-svw h-svh flex items-center justify-center bg-cover bg-center bg-no-repeat'>
			<div className='wrapper bg-white p-5 w-3/4 md:w-1/3 rounded-md '>
				<h1 className='title text-2xl font-light mb-3 text-center'>
					CREATE ACCOUNT
				</h1>
				<form
					onSubmit={handleSubmit(handleRegister)}
					action=''
					className='flex flex-col gap-4'
				>
					<input
						className={`p-[15px] border border-gray-500 rounded-sm text-sm font-light ${
							errors.username && 'placeholder-red-600 outline-red-600'
						}`}
						type='text'
						placeholder={errors.username ? errors.username.message : 'Username'}
						{...register('username', {required: 'username is Required'})}
					/>
					<input
						className={`p-[15px] border border-gray-500 rounded-sm text-sm font-light ${
							errors.email && 'placeholder-red-600 outline-red-600'
						}`}
						type='email'
						name='email'
						placeholder={errors.email ? errors.email.message : 'Email'}
						{...register('email', {required: 'Email is Required'})}
					/>
					<input
						className={`p-[15px] border border-gray-500 rounded-sm text-sm font-light ${
							errors.password && 'placeholder-red-600 outline-red-600'
						}`}
						type='password'
						name='password'
						placeholder={errors.password ? errors.password.message : 'Password'}
						{...register('password', {required: 'Password is Required'})}
					/>
					<input
						className={`p-[15px] border border-gray-500 rounded-sm text-sm font-light ${
							errors.confirmPassword && 'placeholder-red-600 outline-red-600'
						}`}
						type='password'
						name='confirm-password'
						placeholder={
							errors.confirmPassword
								? errors.confirmPassword.message
								: 'Confirm Password'
						}
						{...register('confirmPassword', {
							required: 'Confirm Password is Required',
						})}
					/>
					<span className='text-xs my-5'>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</span>
					<button
						disabled={isFetching}
						type='submit'
						className='w-full md:w-4/5 px-5 py-4 cursor-pointer font-bold mx-auto bg-teal-600 text-white hover:bg-teal-500'
					>
						{isFetching ? 'Creating' : 'Create Account'}
					</button>
					<span className='text-xs'>
						Already have an account?
						<Link to={'/login'} className='underline cursor-pointer'>
							Sign In
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Register;
