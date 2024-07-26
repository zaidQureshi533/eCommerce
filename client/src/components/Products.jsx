import React, {useState} from 'react';
import Product from './Product';
import axios from 'axios';
import {useEffect} from 'react';

const Products = ({category, filters, sort}) => {
	const SERVERURL = process.env.SERVER_URL;
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					category
						? `${SERVERURL}/products?category=${category}`
						: `${SERVERURL}/products`
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
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);
	return (
		<div className='p-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2'>
			{category
				? filteredProducts.map((item) => (
						<Product
							item={item}
							key={item._id}
						/>
				  ))
				: products.slice(0, 8).map((item) => (
						<Product
							item={item}
							key={item._id}
						/>
				  ))}
		</div>
	);
};

export default Products;
