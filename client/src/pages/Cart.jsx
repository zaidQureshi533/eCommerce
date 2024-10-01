import React, {useEffect, useState} from 'react';
import CartProduct from '../components/CartProduct';
import {useDispatch, useSelector} from 'react-redux';
import {publicRequest} from '../requestMethod';
import {useNavigate} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import {clearCart} from '../store/states/cartRedux';
const Cart = ({alert}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const KEY = process.env.REACT_APP_STRIPE;
	const [stripeToken, setStripeToken] = useState(null);
	const cart = useSelector((state) => state.cart);
	const currentUser = useSelector((state) => state.user.currentUser);

	const onToken = (token) => {
		setStripeToken(token);
	};
	useEffect(() => {
		stripeToken &&
			publicRequest
				.post('/checkout/payment', {
					tokenId: stripeToken.id,
					amount: parseFloat((cart.total * 100).toFixed(2)),
				})
				.then((res) => {
					const {status, billing_details, amount} = res.data;
					if (status === 'succeeded') {
						publicRequest.post('/orders', {
							userId: currentUser._id,
							products: cart.products,
							amount: amount / 100,
							address: billing_details.address,
						});
						dispatch(clearCart());
						alert('success', 'Your order has been placed');
						console.log(res);
					}
				})
				.catch((error) => {
					alert('danger', 'Something went wrong!');
				});
	}, [stripeToken, cart.total, navigate]);

	return (
		<>
			<Layout>
				<div className='wrapper p-[10px] md:p-5 mt-5'>
					<h1 className='title text-2xl font-light text-center'>YOUR BAG</h1>
					<div className='top flex items-center justify-between p-5'>
						<Link
							to='/'
							className='text-xs md:text-[16px] p-2 md:p-3 cursor-pointer font-semibold border border-black'
						>
							CONTINUE SHOPPING
						</Link>
						<div className='top-texts hidden md:block'>
							<span className='top-text underline cursor-pointer mx-3'>
								Shopping Bag <strong>({cart.quantity})</strong>
							</span>
							<span className='top-text underline cursor-pointer mx-3'>
								Your Wishlist <strong>(0)</strong>
							</span>
						</div>
						<button className='text-xs md:text-[16px] p-2 md:p-3 cursor-pointer font-semibold text-white bg-gray-900 hover:bg-gray-800'>
							CHECKOUT NOW
						</button>
					</div>
					<div className='bottom flex flex-col md:flex-row justify-between gap-3'>
						<div className='info w-full md:w-3/4 border rounded-lg'>
							{cart.products.length === 0 && (
								<h3 className='h-full flex justify-center items-center text-lg'>
									Your cart is empty. Browse our products to find something you
									love!
								</h3>
							)}
							{cart.products.map((product, index) => {
								return (
									<CartProduct
										key={product._id}
										product={product}
										pIndex={index}
									/>
								);
							})}
						</div>
						<div className='summary w-full md:w-1/4 border rounded-lg p-5 min-h-[50vh]'>
							<h1 className='summary-title text-2xl font-extralight'>
								ORDER SUMMARY
							</h1>
							<div className='summary-item my-7 flex justify-between'>
								<span>Subtotal</span>
								<span>$ {(cart.total - cart.shippingCharges).toFixed(2)}</span>
							</div>
							<div className='summary-item my-7 flex justify-between'>
								<span>Estimated Shipping</span>
								<span>$ {cart.shippingCharges.toFixed(2)}</span>
							</div>
							<div className='summary-item my-7 flex justify-between text-2xl font-medium'>
								<span>Total</span>
								<span>$ {cart.total.toFixed(2)}</span>
							</div>

							<StripeCheckout
								name='ANON'
								description={`Your total is $${cart.total.toFixed(2)}`}
								image='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg' // the pop-in header image (default none)
								billingAddress
								shippingAddress
								allowRememberMe
								currency='USD'
								panelLabel='Pay'
								amount={Math.round(cart.total * 100)}
								stripeKey={KEY}
								token={onToken}
							>
								<button className='w-full p-[10px] bg-gray-900 hover:bg-gray-800 text-white font-semibold '>
									CHECKOUT {cart.quantity < 1 ? '' : `(${cart.quantity})`}
								</button>
							</StripeCheckout>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Cart;
