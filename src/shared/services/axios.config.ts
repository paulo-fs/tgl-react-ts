import axios, { AxiosError } from 'axios';

const instance = axios.create({
	baseURL: 'http://localhots:3333',
	headers: {
		'Content-Type': 'application/json',
		Accpect: 'application/json',
	},
});

instance.interceptors.request.use(async (config) => {
	const isToken = false;
	if(isToken){
		config.headers!.Authorization = 'Bearer' + isToken;
	}
	return config;
}, function(error){
	console.log('erro na request', error);
	return Promise.reject(error);
});

instance.interceptors.response.use(
	async (response) => {
		return response;
	},
	function(error: AxiosError){
		if(error.response){
			return Promise.reject(error.response);
		}
		return Promise.reject(error);
	});

export default instance;
