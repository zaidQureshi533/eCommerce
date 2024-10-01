import React from 'react';
import {BadgeIcon} from './icons';
import {IoSearchOutline} from 'react-icons/io5';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {logout} from '../store/states/userRedux';
import {CiShoppingCart} from 'react-icons/ci';
const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {quantity} = useSelector((state) => state.cart);

	const handleLogout = () => {
		navigate('/login');
		dispatch(logout());
	};

	return (
		<nav className='nav-container pt-2 md:pt-0 bg-white sticky top-0 z-50'>
			<div className='nav-wrapper flex flex-col-reverse gap-y-3 sm:flex-row py-2 px-4 sm:items-center'>
				<div className='nav-left flex items-center justify-between sm:gap-x-3'>
					<span className='language cursor-pointer text-sm'>EN</span>
					<div className='search-container border flex items-center p-1'>
						<input
							type='search'
							className='search-bar text-sm focus:outline-none mx-3'
						/>
						<IoSearchOutline size='18px' />
					</div>
				</div>
				<div className='flex justify-between sm:flex-[2]'>
					<div className='nav-center text-center sm:ml-auto mr-auto'>
						<Link to={'/'} className='font-bold text-2xl md:text-3xl '>
							ANON
						</Link>
					</div>
					<div className='nav-right flex items-center justify-end gap-x-4'>
						<Link to={'/register'} className='text-sm md:text-base'>
							Register
						</Link>
						<button onClick={handleLogout} className='text-sm md:text-base'>
							Log out
						</button>
						<Link to={'/cart'}>
							<button>
								<BadgeIcon
									icon={<CiShoppingCart size='24px' />}
									label={quantity}
								/>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
