import { IAuth, IBodyAuth, ILoginResponse } from '@interfaces/authInterfaces';
import instance from '../axios.config';

export function authServices ():IAuth {
	async function login(body: IBodyAuth): Promise<ILoginResponse> {
		return instance.post('/login', body);
	}

	return { login };
}

