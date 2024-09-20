import React from 'react';
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5';
import {MdOutlineDelete} from 'react-icons/md';
import {
	deleteProduct,
	increaseProductQty,
	decreaseProductQty,
} from '../store/states/cartRedux';
import {useDispatch} from 'react-redux';

const CartProduct = ({product, pIndex}) => {
	const dispatch = useDispatch();
	const PF = process.env.PUBLIC_FOLDER;

	const handleDeleteCart = () => {
		dispatch(deleteProduct({index: pIndex, product}));
	};

	const handleQuantityUpdate = (type) => {
		if (type === 'inc') {
			dispatch(increaseProductQty({index: pIndex, price: product.price}));
		} else {
			dispatch(decreaseProductQty({index: pIndex, price: product.price}));
		}
	};
	return (
		<div className='product flex flex-col md:flex-row justify-between p-3 cursor-pointer relative my-5'>
			<button
				className='absolute top-3 right-3 h-8 w-8 rounded-sm hover:bg-gray-100 flex justify-center items-center transition duration-200'
				onClick={handleDeleteCart}
			>
				<MdOutlineDelete color='#545353' size={24} />
			</button>
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
					<button
						disabled={product.quantity === 1}
						onClick={() => handleQuantityUpdate('dec')}
					>
						<IoRemoveOutline size={20} />
					</button>
					<div className='product-amount text-2xl mx-1 my-4 md:m-1'>
						{product.quantity}
					</div>
					<button onClick={() => handleQuantityUpdate('inc')}>
						<IoAddOutline size={20} />
					</button>
				</div>
				<div className='product-price text-3xl font-light mb-5 md:mb-0'>
					$ {(product.price * product.quantity).toFixed(2)}
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
