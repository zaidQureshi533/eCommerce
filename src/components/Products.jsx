import React from 'react';
import Product from './Product';
import {popularProducts} from '../data';
const Products = () => {
	return (
		<div className='p-5 flex flex-wrap justify-between'>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</div>
	);
};

export default Products;
