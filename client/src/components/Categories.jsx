import React, {useEffect, useState} from 'react';
import {publicRequest} from '../requestMethod';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';

const Categories = ({allCategories}) => {
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
		<div className='p-0 md:p-5'>
			{!allCategories && (
				<div className='text-right mb-1'>
					<Link
						className='font-bold'
						to={'/categories'}
					>
						Show more...
					</Link>
				</div>
			)}
			<div
				className={`grid ${
					allCategories
						? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
						: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
				} gap-2`}
			>
				{allCategories
					? categoryItem.map((item) => {
							return <CategoryItem item={item} key={item._id} />;
					  })
					: categoryItem.slice(0, 3).map((item) => {
							return <CategoryItem item={item} key={item._id} />;
					  })}
			</div>
		</div>
	);
};

export default Categories;
