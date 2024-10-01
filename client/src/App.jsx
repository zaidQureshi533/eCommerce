import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import {useSelector} from 'react-redux';
import Alert from './components/Alert';
import Terms from './pages/Terms';
import ForgotPassword from './pages/ForgotPassword';
import Orders from './pages/Orders';
import AllCategories from './pages/AllCategories';
const App = () => {
	const isLogin = useSelector((state) => state?.user.isLogin);
	const [alert, setAlert] = useState(null);

	const showAlert = (type, message) => {
		setAlert({type, message});
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return (
		<>
			<Alert alert={alert} />
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={isLogin ? <Home /> : <Navigate to='/register' />}
					/>
					<Route
						path='/login'
						element={
							!isLogin ? <Login alert={showAlert} /> : <Navigate to='/' />
						}
					/>
					<Route path='/register' element={<Register alert={showAlert} />} />
					<Route path='/products/:category' element={<ProductList />} />
					<Route path='/categories' element={<AllCategories />} />
					<Route path='/product/:id' element={<Product />} />
					<Route path='/product/:id' element={<Product />} />
					<Route path='/Success' element={<Success />} />
					<Route path='/cart' element={<Cart alert={showAlert} />} />
					<Route path='/terms' element={<Terms />} />
					<Route path='/resetpassword' element={<ForgotPassword />} />
					<Route path='/orders' element={<Orders />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
