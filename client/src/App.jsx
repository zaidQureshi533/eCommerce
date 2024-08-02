import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Success from './pages/Success';

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={user ? <Home /> : <Navigate to='/login' />}
					/>
					<Route path='/products/:category' element={<ProductList />} />
					<Route path='/product/:id' element={<Product />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/success' element={<Success />} />
					<Route
						path='/login'
						element={!user ? <Login /> : <Navigate to='/' />}
					/>
					<Route
						path='/register'
						element={!user ? <Register /> : <Navigate to='/' />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
