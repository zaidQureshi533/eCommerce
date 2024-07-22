import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {Add, Remove} from '../components/icons';

const Product = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<div className='wrapper p-[10px] md:p-12 flex flex-col md:flex-row'>
				<div className='img-container flex-1'>
					<img
						className='w-full h-[40vh] md:h-[90vh] object-cover'
						src='https://i.ibb.co/S6qMxwr/jean.jpg'
						alt=''
					/>
				</div>
				<div className='info-container flex-1 px-[10px] md:px-12'>
					<h1 className='title text-3xl font-extralight'>Denim Jumpsuit</h1>
					<p className='desc my-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</p>
					<span className='price font-thin text-4xl'>$ 20</span>
					<div className='filter-container w-full md:w-1/2 my-7 flex justify-between'>
						<div className='filter flex items-center gap-x-3'>
							<span className='filter-title text-xl font-extralight'>
								Color
							</span>
							<div className='filter-color w-5 h-5 rounded-full cursor-pointer bg-black'></div>
							<div className='filter-color w-5 h-5 rounded-full cursor-pointer bg-blue-700'></div>
							<div className='filter-color w-5 h-5 rounded-full cursor-pointer bg-gray-600'></div>
						</div>
						<div className='filter flex items-center gap-x-3'>
							<span className='filter-title text-xl font-extralight'>Size</span>
							<select
								name=''
								id=''
								className='p-1 border border-gray-400 rounded text-sm'
							>
								<option
									value=''
									selected
								>
									XS
								</option>
								<option
									value=''
									selected
								>
									S
								</option>
								<option
									value=''
									selected
								>
									M
								</option>
								<option
									value=''
									selected
								>
									L
								</option>
								<option
									value=''
									selected
								>
									XL
								</option>
							</select>
						</div>
					</div>
					<div className='add-container w-full md:w-1/2 flex items-center justify-between'>
						<div className='amount-container flex items-center font-bold'>
							<button>
								<Remove />
							</button>
							<span className='amount h-7 w-7 border border-teal-800 flex items-center justify-center mx-2 rounded'>
								1
							</span>
							<button>
								<Add />
							</button>
						</div>
						<button className='p-3 border-2 border-teal-800 cursor-pointer font-medium hover:bg-teal-800 hover:text-white'>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
