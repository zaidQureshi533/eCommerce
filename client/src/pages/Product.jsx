import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {Add, Remove} from '../components/icons';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Product = () => {
	const [product, setProduct] = useState({});
	const {id} = useParams();
	const SERVERURL = process.env.SERVER_URL;
	const PF = process.env.PUBLIC_FOLDER;
	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(`${SERVERURL}/products/${id}`);
				setProduct(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, [id]);
	return (
		<div>
			<Navbar />
			<Announcement />
			<div className='wrapper p-[10px] md:p-12 flex flex-col md:flex-row'>
				<div className='img-container flex-1'>
					<img
						className='w-full h-[40vh] md:h-[90vh] object-cover animate-[bounce_1s_linear_infinite]'
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
							{product.color &&
								product.color.map((item) => {
									return (
										<div
											className={`filter-color w-5 h-5 border rounded-full cursor-pointer`}
											style={{backgroundColor: item}}
										></div>
									);
								})}
						</div>
						<div className='filter flex items-center gap-x-3'>
							<span className='filter-title text-xl font-extralight'>Size</span>
							<select
								name=''
								id=''
								className='p-1 border border-gray-400 rounded text-sm'
							>
								{product.size &&
									product.size.map((item) => <option>{item}</option>)}
							</select>
						</div>
					</div>
					<div className='add-container w-full md:w-1/2 flex items-center justify-between'>
						<div className='amount-container flex items-center font-bold'>
							<button>
								<Remove />
							</button>
							<span className='amount h-7 w-7 border border-teal-800 flex items-center justify-center mx-2 rounded'>
								1
							</span>
							<button>
								<Add />
							</button>
						</div>
						<button className='p-3 border-2 border-teal-800 cursor-pointer font-medium hover:bg-teal-800 hover:text-white'>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
