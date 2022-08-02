import { IBodyRegister, IRegister, IResponseRegister } from '@interfaces/registerInterface';
import api from '../api';

export function registerService ():IRegister {
	async function register(body: IBodyRegister): Promise<IResponseRegister> {
		return api.post('/user/create', body);
	}

	return { register };
}
