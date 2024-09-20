import React, {useState} from 'react';
import Products from '../components/Products';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
const ProductList = () => {
	const {category} = useParams();
	const [filters, setFilters] = useState({color: 'All', size: 'All'});
	const [sort, setSort] = useState('Newest');
	const handleFilters = (e) => {
		setFilters({...filters, [e.target.name]: e.target.value});
	};

	return (
		<div>
			<Layout>
				<h1 className='title font-extrabold text-xl md:text-4xl my-4 px-4 capitalize'>
					{category}
				</h1>
				<hr />
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
							<option>All</option>
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
							<option>All</option>
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
			</Layout>
		</div>
	);
};

export default ProductList;
