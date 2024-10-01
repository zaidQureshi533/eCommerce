import './register.css';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
	TextField,
	Button,
	Typography,
	Box,
	InputAdornment,
	IconButton,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {publicRequest} from '../../requestMethod';
import {useNavigate, Link} from 'react-router-dom';
const Register = ({alert}) => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const password = watch('password'); // Watch the password field for validation

	const onSubmit = (data) => {
		const {firstName, lastName, email, password} = data;
		publicRequest
			.post('/auth/register', {
				username: `${firstName} ${lastName}`,
				email,
				password,
				isAdmin: true,
			})
			.then(() => navigate('/login'))
			.catch((error) => {
				if (error.response) {
					alert('error', error.response.data.message);
				} else if (error.request) {
					alert('error', error.request.data.message);
				}
			});
	};

	return (
		<div className='register-Container'>
			<Box
				component={'form'}
				sx={{width: {xs: '90%', md: '50%', lg: '30%'}}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Typography variant='h5' gutterBottom>
					Create Account
				</Typography>

				<TextField
					label={errors.firstName ? errors.firstName.message : 'First Name'}
					variant='outlined'
					fullWidth
					margin='normal'
					{...register('firstName', {required: 'First name is required'})}
					error={!!errors.firstName}
				/>

				<TextField
					label={errors.lastName ? errors.lastName.message : 'Last Name'}
					variant='outlined'
					fullWidth
					margin='normal'
					{...register('lastName', {required: 'Last name is required'})}
					error={!!errors.lastName}
				/>

				<TextField
					label={errors.email ? errors.email.message : 'Email'}
					variant='outlined'
					fullWidth
					margin='normal'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: 'Please enter a valid email',
						},
					})}
					error={!!errors.email}
				/>

				<TextField
					label={errors.password ? errors.password.message : 'Password'}
					variant='outlined'
					type={showPassword ? 'text' : 'password'}
					fullWidth
					margin='normal'
					{...register('password', {required: 'Password is required'})}
					error={!!errors.password}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									onClick={(e) => setShowPassword(!showPassword)}
									edge='end'
									sx={{marginRight: 1}}
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<TextField
					label={
						errors.confirmPassword
							? errors.confirmPassword.message
							: 'Confirm Password'
					}
					variant='outlined'
					type={showPassword ? 'text' : 'password'}
					fullWidth
					margin='normal'
					{...register('confirmPassword', {
						required: 'Confirm Password is required',
						validate: (value) => value === password || 'Passwords do not match',
					})}
					error={!!errors.confirmPassword}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									onClick={() => setShowPassword(!showPassword)}
									edge='end'
									sx={{marginRight: 1}}
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<Button
					type='submit'
					variant='contained'
					color='primary'
					fullWidth
					sx={{m: 2}}
				>
					Create Account
				</Button>
				<Typography variant='span' sx={{textAlign: 'center'}}>
					Already have an account? <Link to={'/login'}>Login</Link>
				</Typography>
			</Box>
		</div>
	);
};

export default Register;
