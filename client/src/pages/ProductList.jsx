import React, {useEffect, useState} from 'react';
import Products from '../components/Products';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import {publicRequest} from '../requestMethod';
const ProductList = () => {
	const {category} = useParams();
	const [filters, setFilters] = useState({color: 'all', size: 'all'});
	const [sort, setSort] = useState('newest');
	const [colors, setColors] = useState([]);
	const [sizes, setSizes] = useState([]);
	const handleFilters = (e) => {
		setFilters({...filters, [e.target.name]: e.target.value});
	};

	useEffect(() => {
		const colorsSet = new Set();
		const sizesSet = new Set();
		publicRequest
			.get(`/products?category=${category}`)
			.then((res) => {
				res.data.map((product) =>
					product.color.map((c) => {
						colorsSet.add(c);
						setColors([...colorsSet]);
					})
				);
				res.data.map((product) =>
					product.size.map((s) => {
						sizesSet.add(s);
						setSizes([...sizesSet]);
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [category]);

	return (
		<div>
			<Layout>
				<hr />
				<div className='filter-container flex justify-between mt-6'>
					<div className='filter m-5 flex flex-col md:flex-row gap-2'>
						<span className='filter-text text-lg md:text-2xl font-semibold mr-5'>
							Filter Products:
						</span>
						<select
							className='p-2 border border-gray-400 rounded text-sm'
							name='color'
							onChange={handleFilters}
						>
							<option disabled defaultValue='all'>
								Filter By Color
							</option>
							<option value='all'>All</option>
							{colors.map((item) => {
								return (
									item.length > 0 && (
										<option key={item} value={item}>
											{item}
										</option>
									)
								);
							})}
						</select>
						<select
							defaultValue='all'
							className='p-2 mr-3 border border-gray-400 rounded text-sm'
							name='size'
							onChange={handleFilters}
						>
							<option disabled defaultValue='all'>
								Filter By Size
							</option>
							<option value='all'>All</option>
							{sizes.map((item) => {
								return (
									item.length > 0 && (
										<option key={item} value={item}>
											{item}
										</option>
									)
								);
							})}
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
