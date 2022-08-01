import { IAuth, IBodyAuth, ILoginResponse } from '@interfaces/authInterfaces';
import api from '../api';

export function authServices ():IAuth {
	async function login(body: IBodyAuth): Promise<ILoginResponse> {
		return api.post('/login', body);
	}

	return { login };
}

