import React from 'react';
import Announcement from './Announcement';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Navbar from './Navbar';

const Layout = ({children}) => {
	return (
		<>
			<Announcement />
			<Navbar />
			{children}
            <Newsletter />
			<Footer />
		</>
	);
};

export default Layout;
