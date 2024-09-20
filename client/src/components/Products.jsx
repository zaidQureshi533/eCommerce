import React, {useState} from 'react';
import Product from './Product';
import {useEffect} from 'react';
import {publicRequest} from '../requestMethod';

const Products = ({category, filters, sort}) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await publicRequest.get(
					category ? `/products?category=${category}` : `/products`
				);
				setProducts(res.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		const filterProducts = () => {
			if (filters.color === 'All' && filters.size === 'All') {
				setFilteredProducts(products);
			} else {
				setFilteredProducts(
					products.filter((product) =>
						Object.entries(filters).every(([key, value]) =>
							product[key].includes(value)
						)
					)
				);
			}
		};
		category && filterProducts();
	}, [products, category, filters]);
	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts([
				...products.sort((a, b) => a.createdAt - b.createdAt),
			]);
		} else if (sort === 'asc') {
			setFilteredProducts([...products.sort((a, b) => a.price - b.price)]);
		} else {
			setFilteredProducts([...products.sort((a, b) => b.price - a.price)]);
		}
	}, [sort]);

	return (
		<div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
			{category
				? filteredProducts.map((item) => <Product item={item} key={item._id} />)
				: products
						.slice(0, 8)
						.map((item) => <Product item={item} key={item._id} />)}
		</div>
	);
};

export default Products;
