import React from 'react';
import {Heart, Search, ShoppingCart} from './icons';
import {Link} from 'react-router-dom';
const Product = ({item}) => {
	const PF = process.env.PUBLIC_FOLDER;
	return (
		<div className='relative h-[350px] flex items-center justify-center bg-slate-100'>
			<div className='circle w-[200px] h-[200px] bg-white rounded-full absolute'></div>
			<img className='h-2/3 z-[2]' src={PF + item.img} alt='' />
			<div className='info w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer'>
				<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<ShoppingCart color='black' />
				</div>
				<Link to={`/product/${item._id}`}>
					<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
						<Search color='black' />
					</div>
				</Link>
				<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<Heart color='black' />
				</div>
			</div>
		</div>
	);
};

export default Product;
