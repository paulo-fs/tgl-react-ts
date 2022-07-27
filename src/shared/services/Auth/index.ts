import { IBodyAuth, ILoginResponse } from 'src/shared/interfaces';
import instance from '../axios.config';
import { IAuth } from './interfaces';

const authServices = ():IAuth => {
	async function login(body: IBodyAuth): Promise<ILoginResponse> {
		return instance.post('/login', body);
	}

	return { login };
};

export default authServices;
