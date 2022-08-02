import axios, { AxiosError } from 'axios';

const tokenData = localStorage.getItem('@tgl-1.0:auth-data');
const token = JSON.parse(tokenData!).token.token;

const api = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		'Content-Type': 'application/json',
		Accpect: 'application/json',
	},
});

api.interceptors.request.use(async (config) => {
	const isToken = !!token;
	if(isToken){
		config.headers!.Authorization = `Bearer ${token}`;
	}
	return config;
}, function(error: AxiosError){
	if(error.response){
		return Promise.reject(error.response);
	}
	return Promise.reject(error);
});

api.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	function(error: AxiosError){
		if(error.response){
			return Promise.reject(error.response);
		}
		return Promise.reject(error);
	});

export default api;
