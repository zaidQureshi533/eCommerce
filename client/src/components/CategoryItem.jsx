import React from 'react';
import {Link} from 'react-router-dom';

const CategoryItem = ({item}) => {
	const {img, title} = item;
	const PF = process.env.PUBLIC_FOLDER;
	return (
		<Link to={`/products/${title}`}>
			<div className='h-[70vh] relative'>
				<img
					src={`${PF}/${img}`}
					className='w-full h-[60vh] md:h-full object-cover'
				></img>
				<div className='info absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
					<h1 className='title text-[28px] font-extrabold text-white mb-5 uppercase'>
						{title}
					</h1>
					<button className='p-3 bg-white text-gray-700 cursor-pointer font-semibold'>
						SHOP NOW
					</button>
				</div>
			</div>
		</Link>
	);
};

export default CategoryItem;
