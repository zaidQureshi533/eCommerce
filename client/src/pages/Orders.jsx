import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import Layout from '../components/Layout';
const Orders = () => {
	const [orderedProducts, setOrderedProducts] = useState([]);
	return (
		<div>
			<Layout>
				<div className='orders-container'>
					{orderedProducts?.map((product, index) => {
						return <h1>Product:{index}</h1>;
					})}
				</div>
			</Layout>
		</div>
	);
};

export default Orders;
