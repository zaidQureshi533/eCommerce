import React, {useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {publicRequest} from '../requestMethod';
import {useSelector} from 'react-redux';
const Success = () => {
	const location = useLocation();
	const {stripeData, cart} = location.state || {};
	const userId = useSelector((state) => state.user.currentUser?._id);
	useEffect(() => {
		const newOrder = {
			userId,
			products: cart?.products,
			amount: cart?.total,
			address: stripeData?.billing_details.address,
		};
		if (stripeData?.status === 'succeeded') {
			publicRequest.post('/orders', newOrder);
		}
	}, [stripeData, cart]);

	return (
		<div className='flex justify-center items-center h-dvh flex-col'>
			<p>
				<b className='text-lg'>Congratulations !</b> Your order has been placed
				successfully.
			</p>
			<Link to='/orders' className='hover:underline'>
				Check order Status
			</Link>
		</div>
	);
};

export default Success;
