import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import {store, persistor} from './store/store.js';
import {PersistGate} from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			
				<App />
			
		</PersistGate>
	</Provider>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import {Provider} from 'react-redux';
// import {store, persistor} from './store/store.js';
// import {PersistGate} from 'redux-persist/integration/react';
// import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Register from './pages/Register.jsx';
// import ProductList from './pages/ProductList.jsx';
// import Product from './pages/Product.jsx';
// import Cart from './pages/Cart.jsx';
// import Success from './pages/Success';
// import Login from './pages/Login.jsx';

// const currentUser = JSON.parse(
// 	JSON.parse(localStorage.getItem('persist:root'))?.user
// ).currentUser;

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		children: [
// 			{path: '/', element: currentUser ? <Home /> : <Navigate to={'/login'} />},
// 			{path: '/products/:category', element: <ProductList />},
// 			{path: '/product/:id', element: <Product />},
// 			{path: '/cart', element: <Cart />},
// 			{path: '/success', element: <Success />},
// 		],
// 	},
// 	{
// 		path: '/register',
// 		element: !currentUser ? <Register /> : <Navigate to='/' />,
// 	},
// 	{
// 		path: '/login',
// 		element: !currentUser ? <Login /> : <Navigate to='/' />,
// 	},
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<Provider store={store}>
// 		<PersistGate loading={null} persistor={persistor}>
// 			<RouterProvider router={router}>
// 				<App />
// 			</RouterProvider>
// 		</PersistGate>
// 	</Provider>
// );
