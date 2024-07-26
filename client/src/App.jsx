import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const App = () => {
	const user = useSelector((state) => state.user.value);
	const {isLogin} = user;
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={isLogin ? <Home /> : <Navigate to='/login' />}
					/>
					<Route
						path='/login'
						element={!isLogin ? <Login /> : <Navigate to='/' />}
					/>
					<Route
						path='/register'
						element={!isLogin ? <Register /> : <Navigate to='/' />}
					/>
					<Route
						path='/products/:category'
						element={<ProductList />}
					/>
					<Route
						path='/product/:id'
						element={<Product />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
