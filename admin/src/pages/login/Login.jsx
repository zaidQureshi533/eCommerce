// import React, {useState} from 'react';
// import './login.css';
// import TextField from '@mui/material/TextField';
// import {
// 	Button,
// 	FormControl,
// 	IconButton,
// 	InputAdornment,
// 	InputLabel,
// 	OutlinedInput,
// 	Typography,
// } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import {useDispatch} from 'react-redux';
// import {publicRequest} from '../../requestMethod';
// import {
// 	loginFailure,
// 	loginStart,
// 	loginSuccess,
// } from '../../store/states/userRedux';
// import { Link } from 'react-router-dom';
// const Login = ({alert}) => {
// 	const dispatch = useDispatch();
// 	const [userData, setUserData] = useState({email: '', password: ''});
// 	const [showPassword, setShowPassword] = useState(false);

// 	const handleChange = (e) => {
// 		const {name, value} = e.target;
// 		setUserData({...userData, [name]: value});
// 	};

// 	const handleClick = (e) => {
// 		e.preventDefault();
// 		dispatch(loginStart());
// 		publicRequest
// 			.post('/auth/login', userData)
// 			.then((res) => {
// 				if (res.data.isAdmin) {
// 					dispatch(loginSuccess(res.data));
// 				} else {
// 					alert('error', 'you are not authorized to access admin panel');
// 				}
// 			})
// 			.catch((error) => {
// 				alert('error', error.response.data.message);
// 				dispatch(loginFailure());
// 			});
// 	};

// 	const handleShowPassword = () => {
// 		setShowPassword(!showPassword);
// 	};

// 	return (
// 		<div className='loginContainer'>
// 			<form action=''>
// 				<TextField
// 					type='email'
// 					name='email'
// 					label='Email'
// 					variant='outlined'
// 					onChange={handleChange}
// 				/>
// 				<FormControl variant='outlined'>
// 					<InputLabel htmlFor='outlined-adornment-password'>
// 						Password
// 					</InputLabel>
// 					<OutlinedInput
// 						name='password'
// 						onChange={handleChange}
// 						id='outlined-adornment-password'
// 						type={showPassword ? 'text' : 'password'}
// 						endAdornment={
// 							<InputAdornment position='end'>
// 								<IconButton
// 									aria-label='toggle password visibility'
// 									onClick={handleShowPassword}
// 									edge='end'
// 									tabIndex={0}
// 									sx={{marginRight: 1}}
// 								>
// 									{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
// 								</IconButton>
// 							</InputAdornment>
// 						}
// 						label='Password'
// 					/>
// 				</FormControl>
// 				<Button onClick={handleClick} variant='contained' size='large'>
// 					Log In
// 				</Button>
// 				<Typography variant='span' sx={{textAlign: 'center'}}>
// 					Don't have an account? <Link to={'/register'}>Create Account</Link>
// 				</Typography>
// 			</form>
// 		</div>
// 	);
// };

// export default Login;
import React, {useState} from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useDispatch} from 'react-redux';
import {publicRequest} from '../../requestMethod';
import {
	loginFailure,
	loginStart,
	loginSuccess,
} from '../../store/states/userRedux';
import {Link} from 'react-router-dom';
import {useForm, Controller} from 'react-hook-form';

const Login = ({alert}) => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data) => {
		dispatch(loginStart());
		publicRequest
			.post('/auth/login', data)
			.then((res) => {
				if (res.data.isAdmin) {
					dispatch(loginSuccess(res.data));
				} else {
					alert('error', 'You are not authorized to access admin panel');
				}
			})
			.catch((error) => {
				alert('error', error.response.data.message);
				dispatch(loginFailure());
			});
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='loginContainer'>
			<Box
				component={'form'}
				onSubmit={handleSubmit(onSubmit)}
				sx={{width: {xs: '90%',sm: "50%", md: '40%', lg: '25%'}}}
			>
				<Typography variant='h5' component='h1' gutterBottom>
					Login
				</Typography>
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Email is required',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: 'Enter a valid email address',
						},
					}}
					render={({field}) => (
						<TextField
							type='email'
							label={errors.email ? errors.email.message : 'Email'}
							variant='outlined'
							error={!!errors.email}
							{...field}
						/>
					)}
				/>
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Password is required',
					}}
					render={({field}) => (
						<FormControl variant='outlined' error={!!errors.password}>
							<InputLabel htmlFor='outlined-adornment-password'>
								{errors.password ? errors.password.message : 'Password'}
							</InputLabel>
							<OutlinedInput
								{...field}
								type={showPassword ? 'text' : 'password'}
								id='outlined-adornment-password'
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleShowPassword}
											edge='end'
											tabIndex={0}
											sx={{marginRight: 1}}
										>
											{showPassword ? (
												<VisibilityOffIcon />
											) : (
												<VisibilityIcon />
											)}
										</IconButton>
									</InputAdornment>
								}
								label={errors.password ? errors.password.message : 'Password'}
							/>
						</FormControl>
					)}
				/>
				<Button type='submit' variant='contained' size='large' fullWidth>
					Log In
				</Button>
				<Typography variant='span'>
					Don't have an account? <Link to={'/register'}>Create Account</Link>
				</Typography>
			</Box>
		</div>
	);
};

export default Login;
