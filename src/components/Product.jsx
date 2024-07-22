import React from 'react';
import {Heart, Search, ShoppingCart} from './icons';

const Product = ({item}) => {
	return (
		<div className='relative flex-1 m-1 min-w-[280px] h-[350px] flex items-center justify-center bg-slate-100'>
			<div className='circle w-[200px] h-[200px] bg-white rounded-full absolute'></div>
			<img
				className='h-3/4 z-[2]'
				src={item.img}
				alt=''
			/>
			<div className='info w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer'>
				<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<ShoppingCart color='black' />
				</div>
				<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<Search color='black' />
				</div>
				<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<Heart color='black' />
				</div>
			</div>
		</div>
	);
};

export default Product;
