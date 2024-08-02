import React from 'react';
import {BadgeIcon, Search, ShoppingCart} from './icons';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const Navbar = () => {
	const {quantity} = useSelector((state) => state.cart);
	return (
		<nav className='nav-container pt-2 md:pt-0'>
			<div className='nav-wrapper flex flex-col-reverse gap-y-3 sm:flex-row py-2 px-4 sm:items-center'>
				<div className='nav-left flex items-center justify-between sm:gap-x-3'>
					<span className='language cursor-pointer text-sm'>EN</span>
					<div className='search-container border flex items-center p-1'>
						<input
							type='search'
							className='search-bar text-sm focus:outline-none mx-3'
						/>
						<Search size='18px' />
					</div>
				</div>
				<div className='flex justify-between sm:flex-[2]'>
					<div className='nav-center text-center sm:ml-auto mr-auto'>
						<span className='font-bold text-2xl md:text-3xl'>ANON</span>
					</div>
					<div className='nav-right flex items-center justify-end gap-x-4'>
						<span className='text-sm md:text-base'>Register</span>
						<span className='text-sm md:text-base'>Sign In</span>
						<Link to={'/cart'}>
							<button>
								<BadgeIcon
									icon={<ShoppingCart size='24px' />}
									badgeContent={quantity}
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
