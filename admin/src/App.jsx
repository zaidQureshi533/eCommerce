// import './App.css';
// import Topbar from './components/topbar/Topbar';
// import Sidebar from './components/sidebar/Sidebar';
// import {Outlet} from 'react-router-dom';

// function App() {
// 	return (
// 		<>
// 			<Topbar />
// 			<div className='container'>
// 				<Sidebar />
// 				<div className='outlet'>
// 					<Outlet />
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default App;

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import {useSelector} from 'react-redux';
import {Alert} from '@mui/material';
import {useState} from 'react';
import Orders from './pages/orders/Orders';
function App() {
	const isLogin = useSelector((state) => state.user.isLogin);
	const [alert, setAlert] = useState(null);
	const showAlert = (type, message) => {
		setAlert({type: type, message: message});

		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return (
		<>
			{alert && <Alert severity={alert.type}>{alert.message}</Alert>}
			<BrowserRouter>
				{isLogin && <Topbar />}
				<div className='container'>
					{isLogin && <Sidebar />}
					<div className='outlet'>
						<Routes>
							<Route
								exact
								path='/'
								element={isLogin ? <Home /> : <Navigate to={'/login'} />}
							/>
							<Route
								path='/users'
								element={isLogin ? <UserList /> : <Navigate to={'/login'} />}
							/>
							<Route
								path='/user/:userId'
								element={isLogin ? <User /> : <Navigate to={'/login'} />}
							/>
							<Route path='/newUser' element={isLogin ? <NewUser /> : <Navigate to={'/login'} />} />
							<Route path='/orders' element={isLogin ? <Orders /> : <Navigate to={'/login'} />} />
							<Route path='/products' element={isLogin ? <ProductList /> : <Navigate to={'/login'} />} />
							<Route path='/product/:productId' element={isLogin ? <Product /> : <Navigate to={'/login'} />} />
							<Route path='/newproduct' element={isLogin ? <NewProduct /> : <Navigate to={'/login'} />} />
							<Route
								path='/login'
								element={
									!isLogin ? <Login alert={showAlert} /> : <Navigate to='/' />
								}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
