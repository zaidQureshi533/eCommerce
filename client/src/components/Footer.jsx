import React from 'react';
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoPinterest,
	IoLogoTwitter,
	IoLocationSharp,
} from 'react-icons/io5';
import {MdMail, MdPhone} from 'react-icons/md';
import {Link} from 'react-router-dom';
const Footer = () => {
	return (
		<div className='flex gap-3 flex-col lg:flex-row text-gray-800 border-t p-5 text-sm'>
			<div className='left flex-1 flex flex-col'>
				<h1 className='logo font-extrabold text-xl text-teal-700'>eCommerce</h1>
				<p className='desc my-2'>
					At eCommerce, we’re passionate about helping you express your unique
					style with a curated selection of high-quality fashion essentials.
					Explore our extensive collection of stylish and sophisticated clothing
					and accessories for both men and women.
				</p>
				<div className='social-container flex gap-2'>
					<span className={'cursor-pointer'}>
						<IoLogoFacebook color='#3232ff' size={40} />
					</span>
					<span className={'cursor-pointer'}>
						<IoLogoInstagram color='#e7204c' size={40} />
					</span>
					<span className={'cursor-pointer'}>
						<IoLogoTwitter color='#33b2ff' size={40} />
					</span>
					<span className={'cursor-pointer'}>
						<IoLogoPinterest color='#ed0909' size={40} />
					</span>
				</div>
			</div>
			<div className='center hidden md:block flex-1'>
				<h3 className='title font-bold text-lg mb-2 text-teal-700'>Useful Links</h3>
				<ul className='list flex flex-wrap gap-y-3'>
					<Link to={'/'} className='list-item w-1/2'>
						Home
					</Link>
					<Link to={'/cart'} className='list-item w-1/2'>
						Cart
					</Link>
					<Link to={'/products/mens'} className='list-item w-1/2'>
						Man Fashion
					</Link>
					<Link to={'/products/womens'} className='list-item w-1/2'>
						Woman Fashion
					</Link>
					<Link className='list-item w-1/2'>Accessories</Link>
					<Link className='list-item w-1/2'>My Account</Link>
					<Link className='list-item w-1/2'>Order Tracking</Link>
					<Link className='list-item w-1/2'>Wishlist</Link>
					<Link to={'/terms'} className='list-item w-1/2'>
						Terms
					</Link>
				</ul>
			</div>
			<div className='right flex-1 '>
				<h3 className='title font-bold text-lg mb-2 text-teal-700'>Contact</h3>
				<div className='flex items-center gap-x-3 mb-5'>
					<IoLocationSharp size={20} /> House # SC-79, Sector 31/d, P&T Housing
					Society, Korangi 01, Karachi
				</div>
				<div className='flex items-center gap-x-3 mb-5'>
					<MdPhone size={20} />
					+92 300 3480130
				</div>
				<div className='flex items-center gap-x-3 mb-5'>
					<MdMail size={20} />
					contact.ecommerce@hotmail.com
				</div>
				<img
					className='w-1/2'
					src='https://i.ibb.co/Qfvn4z6/payment.png'
					alt='payment'
				/>
			</div>
		</div>
	);
};

export default Footer;
