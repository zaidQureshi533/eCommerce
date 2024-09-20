import axios from 'axios';

const BASE_URL = process.env.SERVER_URL;

const isToken = localStorage.getItem('persist:admin');
const TOKEN =
	isToken &&
	JSON.parse(JSON.parse(isToken)?.user)
		.currentUser?.accessToken;

//PUBLIC REQUEST
export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

//USER REQUEST
export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {token: `Bearer ${TOKEN}`},
});
