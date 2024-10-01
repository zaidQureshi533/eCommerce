import React from 'react';
import './topbar.css';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/states/userRedux';
import {
	NotificationsNone,
	Language,
	Settings,
	PersonAdd,
	Logout,
} from '@mui/icons-material';
import {
	Avatar,
	Badge,
	Box,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
} from '@mui/material';

export default function Topbar() {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>eCommerce Admin</span>
				</div>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						columnGap: '30px',
					}}
				>
					<Tooltip title='Notifications' sx={{cursor: 'pointer'}}>
						<Badge badgeContent={4} color='primary'>
							<NotificationsNone color='action' />
						</Badge>
					</Tooltip>
					<Tooltip title='Languages' sx={{cursor: 'pointer'}}>
						<Badge badgeContent={4} color='primary'>
							<Language color='action' />
						</Badge>
					</Tooltip>
					<Tooltip title='Setting' sx={{cursor: 'pointer'}}>
						<Settings color='action' />
					</Tooltip>
					<Tooltip title='Account settings'>
						<IconButton
							onClick={handleClick}
							size='small'
							// sx={{ml: 1}}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
						>
							<Avatar sx={{width: 32, height: 32}}>M</Avatar>
						</IconButton>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorEl}
					id='account-menu'
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					slotProps={{
						paper: {
							elevation: 0,
							sx: {
								overflow: 'visible',
								filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
								mt: 1.5,
								'& .MuiAvatar-root': {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								'&::before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									bgcolor: 'background.paper',
									transform: 'translateY(-50%) rotate(45deg)',
									zIndex: 0,
								},
							},
						},
					}}
					transformOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
				>
					<MenuItem onClick={handleClose}>
						<Avatar /> Profile
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Avatar /> My account
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<PersonAdd fontSize='small' />
						</ListItemIcon>
						Add another account
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<Settings fontSize='small' />
						</ListItemIcon>
						Settings
					</MenuItem>
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<Logout fontSize='small' />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
}
