import React from 'react';
import {Link} from 'react-router-dom';
import {addProduct} from '../store/states/cartRedux';
import {useDispatch} from 'react-redux';
import {IoSearchOutline, IoCartOutline, IoHeartOutline} from 'react-icons/io5';
const Product = ({item}) => {
	const PF = process.env.PUBLIC_FOLDER;
	const dispatch = useDispatch();
	const handleCart = () => {
		dispatch(
			addProduct({
				...item,
				quantity: 1,
				size: item.size[0],
				color: item.color[0],
			})
		);
	};

	return (
		<div className='relative h-[350px] flex items-center justify-center bg-slate-100'>
			<div className='circle w-[200px] h-[200px] bg-white rounded-full absolute'></div>
			<img
				className='w-[190px] h-[190px] object-contain z-[2] '
				src={PF + item.img}
				alt=''
			/>

			<div className='info w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer'>
				<button
					onClick={handleCart}
					className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'
				>
					<IoCartOutline size={24} />
				</button>
				<Link to={`/product/${item._id}`}>
					<div className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
						<IoSearchOutline size={24} />
					</div>
				</Link>
				<button className='icon w-10 h-10 bg-white rounded-full flex items-center justify-center m-3 cursor-pointer hover:scale-110 transition-all duration-500'>
					<IoHeartOutline size={24} />
				</button>
			</div>
		</div>
	);
};

export default Product;
