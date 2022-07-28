import axios, { AxiosError } from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		'Content-Type': 'application/json',
		Accpect: 'application/json',
	},
});

api.interceptors.request.use(async (config) => {
	const isToken = false;
	if(isToken){
		config.headers!.Authorization = 'Bearer' + isToken;
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
