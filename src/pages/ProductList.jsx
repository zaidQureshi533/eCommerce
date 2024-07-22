import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductList = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<h1 className='title font-extrabold text-xl md:text-3xl text-center my-2'>
				Dresses
			</h1>
			<div className='filter-container flex justify-between'>
				<div className='filter m-5 flex flex-col md:flex-row gap-2'>
					<span className='filter-text text-lg md:text-2xl font-semibold mr-5'>
						Filter Products:
					</span>
					<select className='p-2 border border-gray-400 rounded text-sm'>
						<option
							disabled
							selected
						>
							Color
						</option>
						<option>White</option>
						<option>Black</option>
						<option>Red</option>
						<option>Yellow</option>
						<option>Blue</option>
					</select>
					<select className='p-2 mr-3 border border-gray-400 rounded text-sm'>
						<option
							disabled
							selected
						>
							Size
						</option>
						<option>XS</option>
						<option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</select>
				</div>
				<div className='filter m-5 flex flex-col md:flex-row gap-2'>
					<span className='filter-text text-lg md:text-2xl font-semibold mr-5'>
						Sort Products:
					</span>
					<select className='p-2 mr-3 border border-gray-400 rounded text-sm'>
						<option
							value=''
							selected
						>
							Newest
						</option>
						<option value=''>Price (asc)</option>
						<option value=''>Price (desc)</option>
					</select>
				</div>
			</div>
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductList;
