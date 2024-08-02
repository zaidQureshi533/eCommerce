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
				console.log(error);
			}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
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
		<div className='p-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2'>
			{category
				? filteredProducts.map((item) => <Product item={item} key={item._id} />)
				: products
						.slice(0, 8)
						.map((item) => <Product item={item} key={item._id} />)}
		</div>
	);
};

export default Products;
