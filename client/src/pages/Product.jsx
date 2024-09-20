import React, {useEffect, useState} from 'react';
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5';
import {useParams} from 'react-router-dom';
import {publicRequest} from '../requestMethod';
import {useDispatch} from 'react-redux';
import {addProduct} from '../store/states/cartRedux';

import Layout from '../components/Layout';
const Product = () => {
	const {id} = useParams();
	const PF = process.env.PUBLIC_FOLDER;
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(`/products/find/${id}`);
				setProduct(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, [id]);

	const handleQuantity = (type) => {
		type === 'dec'
			? quantity > 1 && setQuantity(quantity - 1)
			: setQuantity(quantity + 1);
	};

	const handleCart = async () => {
		//update cart
		dispatch(
			addProduct({
				...product,
				quantity,
				size,
				color,
			})
		);
	};
	return (
		<div>
			<Layout>
				<div className='wrapper p-[10px] md:p-12 flex flex-col md:flex-row'>
					<div className='img-container flex-1'>
						<img
							className='w-full h-[40vh] md:h-[90vh] object-contain animate-[bounce_2s_linear_infinite]'
							src={`${PF}/${product.img}`}
							alt=''
						/>
					</div>
					<div className='info-container flex-1 px-[10px] md:px-12'>
						<h1 className='title text-3xl font-extralight'>{product.title}</h1>
						<p className='desc my-5'>{product.desc}</p>
						<span className='price font-thin text-4xl'>$ {product.price}</span>
						<div className='filter-container w-full my-7 flex gap-5'>
							<div className='filter flex items-center gap-x-3'>
								<span className='filter-title text-xl font-extralight'>
									Color
								</span>
								{product.color?.map((item) => {
									return (
										<div
											key={item}
											className={`filter-color w-5 h-5 ${
												item === 'white' && 'border-2'
											} rounded-full cursor-pointer`}
											style={{backgroundColor: item}}
											onClick={() => setColor(item)}
										></div>
									);
								})}
							</div>
							<div className='filter flex items-center gap-x-3'>
								<span className='filter-title text-xl font-extralight'>
									Size
								</span>
								<select
									name=''
									id=''
									className='p-1 border border-gray-400 rounded text-sm'
									onChange={(e) => {
										setSize(e.target.value);
									}}
								>
									{product.size?.map((s) => (
										<option key={s} defaultValue={'M'}>
											{s}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='add-container w-full md:w-1/2 flex items-center justify-between'>
							<div className='amount-container flex items-center font-bold'>
								<button
									onClick={() => {
										handleQuantity('dec');
									}}
								>
									<IoRemoveOutline size={24} />
								</button>
								<span className='amount h-7 w-7 border border-teal-800 flex items-center justify-center mx-2 rounded'>
									{quantity}
								</span>
								<button
									onClick={() => {
										handleQuantity('inc');
									}}
								>
									<IoAddOutline size={24} />
								</button>
							</div>
							<button
								onClick={handleCart}
								className='p-3 border-2 border-teal-800 cursor-pointer font-medium hover:bg-teal-800 hover:text-white'
							>
								ADD TO CART
							</button>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Product;
