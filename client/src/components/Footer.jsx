import React from 'react';
import {
	Facebook,
	Instagram,
	Mail,
	Map,
	Phone,
	Pinterest,
	Twitter,
} from './icons';

const Footer = () => {
	return (
		<div className='flex flex-col lg:flex-row text-gray-800 '>
			<div className='left flex-1 flex flex-col p-5'>
				<h1 className='logo font-extrabold text-xl'>eCommerce</h1>
				<p className='desc my-5'>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</p>
				<div className='social-container flex gap-2'>
					<div className='social-icon h-10 w-10 rounded-full flex justify-center items-center bg-blue-600'>
						<Facebook
							color='#fff'
							size='22px'
						/>
					</div>
					<div className='social-icon h-10 w-10 rounded-full flex justify-center items-center bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500'>
						<Instagram
							color='#fff'
							size='22px'
						/>
					</div>
					<div className='social-icon h-10 w-10 rounded-full flex justify-center items-center bg-blue-500'>
						<Twitter
							color='#fff'
							size='22px'
						/>
					</div>
					<div className='social-icon h-10 w-10 rounded-full flex justify-center items-center bg-[rgb(255,0,01)]'>
						<Pinterest
							color='#fff'
							size='22px'
						/>
					</div>
				</div>
			</div>
			<div className='center hidden md:block flex-1 p-5'>
				<h3 className='title font-bold text-lg mb-7'>Useful Links</h3>
				<ul className='list flex flex-wrap gap-y-3'>
					<li className='list-item w-1/2'>Home</li>
					<li className='list-item w-1/2'>Cart</li>
					<li className='list-item w-1/2'>Man Fashion</li>
					<li className='list-item w-1/2'>Woman Fashion</li>
					<li className='list-item w-1/2'>Accessories</li>
					<li className='list-item w-1/2'>My Account</li>
					<li className='list-item w-1/2'>Order Tracking</li>
					<li className='list-item w-1/2'>Wishlist</li>
					<li className='list-item w-1/2'>Terms</li>
				</ul>
			</div>
			<div className='right flex-1 p-5 bg-[#fff8f8] md:bg-white'>
				<h3 className='title font-bold text-lg mb-7'>Contact</h3>
				<div className='flex items-center gap-x-3 mb-5'>
					<Map size='36px' /> House # SC-79, Sector 31/d, P&T Housing Society,
					Korangi 01, Karachi
				</div>
				<div className='flex items-center gap-x-3 mb-5'>
					<Phone size='24px' />
					+92 300 3480130
				</div>
				<div className='flex items-center gap-x-3 mb-5'>
					<Mail size='24px' />
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
