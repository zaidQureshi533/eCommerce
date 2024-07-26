import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {useParams} from 'react-router-dom';

const ProductList = () => {
	const {category} = useParams();
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('Newest');
	const handleFilters = (e) => {
		setFilters({...filters, [e.target.name]: e.target.value});
		console.log(filters)
	};

	return (
		<div>
			<Navbar />
			<Announcement />
			<h1 className='title font-extrabold text-xl md:text-4xl text-center mt-3 capitalize'>
				{category}
			</h1>
			<div className='filter-container flex justify-between'>
				<div className='filter m-5 flex flex-col md:flex-row gap-2'>
					<span className='filter-text text-lg md:text-2xl font-semibold mr-5'>
						Filter Products:
					</span>
					<select
						className='p-2 border border-gray-400 rounded text-sm'
						name='color'
						onChange={handleFilters}
					>
						<option
							disabled
							defaultValue
						>
							Color
						</option>
						<option>white</option>
						<option>black</option>
						<option>red</option>
						<option>yellow</option>
						<option>blue</option>
					</select>
					<select
						className='p-2 mr-3 border border-gray-400 rounded text-sm'
						name='size'
						onChange={handleFilters}
					>
						<option
							disabled
							defaultValue
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
					<select
						className='p-2 mr-3 border border-gray-400 rounded text-sm'
						onChange={(e) => setSort(e.target.value)}
					>
						<option value='newest'>Newest</option>
						<option value='asc'>Price (asc)</option>
						<option value='desc'>Price (desc)</option>
					</select>
				</div>
			</div>
			<Products category={category} filters={filters} sort={sort} />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductList;
