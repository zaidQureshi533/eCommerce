import React from 'react';
import {Add, Remove} from './icons';
import {Link} from 'react-router-dom';
const CartProduct = ({product}) => {
	const PF = process.env.PUBLIC_FOLDER;
	return (
		<Link to={`/product/${product._id}`}>
			<div className='product flex flex-col md:flex-row justify-between py-3 cursor-pointer'>
				<div className='product-detail flex-1 md:flex-[3] flex'>
					<img
						className='w-[200px] h-[200px] object-cover'
						src={`${PF}/${product.img}`}
					/>
					<div className='details p-5 flex flex-col justify-around gap-y-2'>
						<span>
							<b>Product:</b> {product.title}
						</span>
						<span>
							<b>ID:</b> {product._id}
						</span>
						<div
							className={`w-5 h-5 rounded-full ${
								product.color === 'white' && 'border-2'
							}`}
							style={{backgroundColor: product.color}}
						></div>
						<span>
							<b>Size:</b> {product.size}
						</span>
					</div>
				</div>
				<div className='price-detail flex-1 md:flex-1 flex md:flex-col items-center justify-between md:justify-center px-3 md:p-0'>
					<div className='product-amount-container flex items-center mb-5'>
						<Add />
						<div className='product-amount text-2xl mx-1 my-4 md:m-1'>
							{product.quantity}
						</div>
						<Remove />
					</div>
					<div className='product-price text-3xl font-light mb-5 md:mb-0'>
						$ {product.price * product.quantity}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CartProduct;
