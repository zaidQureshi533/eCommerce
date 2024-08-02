import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import CartProduct from '../components/CartProduct';
import {useSelector} from 'react-redux';
import {userRequest} from '../requestMethod';
import {useNavigate} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart);
	const KEY = process.env.REACT_APP_STRIPE;
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post(`/checkout/payment`, {
					tokenId: stripeToken.id,
					amount: cart.total * 100,
				});
				navigate('/success', {stripeData: res.data, products: cart});
			} catch (error) {
				console.log(error);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, navigate]);

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
						{cart.products.map((product) => {
							return <CartProduct key={product._id} product={product} />;
						})}
					</div>
					<div className='summary w-full md:w-1/4 border rounded-lg p-5 min-h-[50vh]'>
						<h1 className='summary-title text-2xl font-extralight'>
							ORDER SUMMARY
						</h1>
						<div className='summary-item my-7 flex justify-between'>
							<span>Subtotal</span>
							<span>$ {cart.total}</span>
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
							<span>$ {cart.total}</span>
						</div>
					
						<StripeCheckout
							name='ANON'
							description={`Your total is $${cart.total}`}
							image='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg' // the pop-in header image (default none)
							billingAddress
							shippingAddress
							allowRememberMe
							currency='USD'
							panelLabel='Pay'
							amount={cart.total}
							stripeKey={KEY}
							token={onToken}
						>
							<button className='w-full p-[10px] bg-black text-white font-semibold'>
								CHECKOUT NOW
							</button>
						</StripeCheckout>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
