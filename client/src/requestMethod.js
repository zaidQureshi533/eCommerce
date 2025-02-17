import axios from 'axios';

const BASE_URL = process.env.SERVER_URL;
const TOKEN = localStorage.getItem('token');

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {token: `Bearer ${TOKEN}`},
});
