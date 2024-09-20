import React, {useEffect, useState} from 'react';
import {publicRequest} from '../requestMethod';
import CategoryItem from './CategoryItem';

const Categories = () => {
	const [categoryItem, setCategoryItem] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await publicRequest.get(`/categories`);
				setCategoryItem(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getCategories();
	}, []);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-0 md:p-5'>
			{categoryItem.map((item) => (
				<CategoryItem item={item} key={item._id} />
			))}
		</div>
	);
};

export default Categories;
