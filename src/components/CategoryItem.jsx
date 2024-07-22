import React from 'react';

const CategoryItem = ({item}) => {
	const {img, title} = item;
	return (
		<div className='flex-1 m-1 h-[70vh] relative'>
			<img
				src={img}
				className='w-full h-[60vh] md:h-full object-cover'
			></img>
			<div className='info absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
				<h1 className='title text-[28px] font-extrabold text-white mb-5'>{title}</h1>
				<button className="p-3 bg-white text-gray-700 cursor-pointer font-semibold">SHOP NOW</button>
			</div>
		</div>
	);
};

export default CategoryItem;
