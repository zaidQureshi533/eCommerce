import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<>
			<Layout>
				<Slider />
				<Categories />
				<Products />
			</Layout>
		</>
	);
};
export default Home;
