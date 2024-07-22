import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {Add, Remove} from '../components/icons';
const Cart = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<div className='wrapper p-[10px] md:p-5 mt-5'>
				<h1 className='title text-2xl font-light text-center'>YOUR BAG</h1>
				<div className='top flex items-center justify-between p-5'>
					<button className='text-xs md:text-[16px] p-2 md:p-3 cursor-pointer font-semibold border border-black'>
						CONTINUE SHOPPING
					</button>
					<div className='top-texts hidden md:block'>
						<span className='top-text underline cursor-pointer mx-3'>
							Shopping Bag(2)
						</span>
						<span className='top-text underline cursor-pointer mx-3'>
							Your Wishlist (0)
						</span>
					</div>
					<button className='text-xs md:text-[16px] p-2 md:p-3 cursor-pointer font-semibold bg-black text-white'>
						CHECKOUT NOW
					</button>
				</div>
				<div className='bottom flex flex-col md:flex-row justify-between gap-3'>
					<div className='info w-full md:w-3/4 border rounded-lg'>
						<div className='product flex flex-col md:flex-row justify-between'>
							<div className='product-detail flex-2 flex'>
								<img
									className='w-[200px]'
									src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'
								/>
								<div className='details p-5 flex flex-col justify-around'>
									<span>
										<b>Product:</b> JESSIE THUNDER SHOES
									</span>
									<span>
										<b>ID:</b> 93813718293
									</span>
									<div className='w-5 h-5 rounded-full bg-black'></div>
									<span>
										<b>Size:</b> 37.5
									</span>
								</div>
							</div>
							<div className='price-detail flex-1 flex md:flex-col items-center justify-between md:justify-center px-3 md:p-0'>
								<div className='product-amount-container flex items-center mb-5'>
									<Add />
									<div className='product-amount text-2xl mx-1 my-4 md:m-1'>
										2
									</div>
									<Remove />
								</div>
								<div className='product-price text-3xl font-light mb-5 md:mb-0'>
									$ 30
								</div>
							</div>
						</div>
						<hr />
						<div className='product flex flex-col md:flex-row justify-between'>
							<div className='product-detail flex-2 flex'>
								<img
									className='w-[200px]'
									src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'
								/>
								<div className='details p-5 flex flex-col justify-around'>
									<span>
										<b>Product:</b> HAKURA T-SHIRT
									</span>
									<span>
										<b>ID:</b> 93813718293
									</span>
									<div className='w-5 h-5 rounded-full bg-black'></div>
									<span>
										<b>Size:</b> M
									</span>
								</div>
							</div>
							<div className='price-detail flex-1 flex md:flex-col items-center justify-between md:justify-center px-3 md:p-0'>
								<div className='product-amount-container flex items-center mb-5'>
									<Add />
									<div className='product-amount text-2xl mx-1 my-4 md:m-1'>
										1
									</div>
									<Remove />
								</div>
								<div className='product-price text-3xl font-light mb-5 md:mb-0'>
									$ 20
								</div>
							</div>
						</div>
					</div>
					<div className='summary w-full md:w-1/4 border rounded-lg p-5 min-h-[50vh]'>
						<h1 className='summary-title text-2xl font-extralight'>
							ORDER SUMMARY
						</h1>
						<div className='summary-item my-7 flex justify-between'>
							<span>Subtotal</span>
							<span>$ 80</span>
						</div>
						<div className='summary-item my-7 flex justify-between'>
							<span>Estimated Shipping</span>
							<span>$ 5.9</span>
						</div>
						<div className='summary-item my-7 flex justify-between'>
							<span>Shipping Discount</span>
							<span>$ -5.9</span>
						</div>
						<div className='summary-item my-7 flex justify-between text-2xl font-medium'>
							<span>Total</span>
							<span>$ 80</span>
						</div>
						<button className='w-full p-[10px] bg-black text-white font-semibold'>
							CHECKOUT NOW
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
