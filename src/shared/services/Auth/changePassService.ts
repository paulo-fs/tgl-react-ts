import { IChangePass, IChangePassBody, IChangePassResponse } from '@interfaces/changePassInterfaces';
import api from '../api';

export function changePassServices ():IChangePass {
	async function changePassword(body: IChangePassBody): Promise<IChangePassResponse> {
		return api.post(`/reset/${body.token}`, body.password);
	}

	return { changePassword };
}

