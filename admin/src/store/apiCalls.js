import {loginFailure, loginStart, loginSuccess} from './states/userRedux';
import {publicRequest, userRequest} from '../requestMethod';
import {
	addProductFailure,
	addProductStart,
	addProductSuccess,
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	getProductFailure,
	getProductStart,
	getProductSuccess,
	updateProductFailure,
	updateProductStart,
	updateProductSuccess,
} from './states/productRedux';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		publicRequest
			.post('/auth/login', user)
			.then((res) => {
				dispatch(loginSuccess(res.data));
			})
			.catch((error) => console.log(error.response.data.message));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const getProducts = async (dispatch) => {
	dispatch(getProductStart());
	try {
		const res = await publicRequest.get('/products');
		dispatch(getProductSuccess(res.data));
	} catch (error) {
		dispatch(getProductFailure());
	}
};
export const deleteProduct = async (dispatch, id) => {
	dispatch(deleteProductStart());
	try {
		const res = await userRequest.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch (error) {
		dispatch(deleteProductFailure());
	}
};
export const updateProduct = async (dispatch, id, data) => {
	dispatch(updateProductStart());
	try {
		const res = await userRequest.patch(`/products/${id}`, data);
		dispatch(updateProductSuccess({id, product: res.data}));
	} catch (error) {
		dispatch(updateProductFailure());
	}
};

export const addProduct = async (dispatch, product) => {
	dispatch(addProductStart());
	try {
		const res = await userRequest.post(`/products`, product);
		dispatch(addProductSuccess(res.data));
	} catch (error) {
		dispatch(addProductFailure());
	}
};

export const uploadImage = async (file) => {
	try {
		const res = await userRequest.post('/upload', file);
	} catch (error) {
		console.log(error.message);
	}
};
