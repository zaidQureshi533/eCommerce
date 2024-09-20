import React, {useState} from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
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
const Login = ({alert}) => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({email: '', password: ''});
	const [showPassword, setShowPassword] = React.useState(false);

	const handleChange = (e) => {
		setUserData({...userData, [e.target.name]: e.target.value});
	};

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(loginStart());
		publicRequest
			.post('/auth/login', userData)
			.then((res) => {
				if (res.data.isAdmin) {
					dispatch(loginSuccess(res.data));
				} else {
					alert('error', 'you are not authorized to access admin panel');
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
			<form action=''>
				<TextField
					type='email'
					name='email'
					label='Email'
					variant='outlined'
					onChange={handleChange}
				/>
				<FormControl variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						name='password'
						onChange={handleChange}
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleShowPassword}
									edge='end'
									tabIndex={0}
									sx={{marginRight: 1}}
								>
									{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<Button onClick={handleClick} variant='contained' size='large'>
					Log In
				</Button>
			</form>
		</div>
	);
};

export default Login;
