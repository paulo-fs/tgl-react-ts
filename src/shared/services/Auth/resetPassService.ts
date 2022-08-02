import { IBodyResetPass, IResetPass, IResetPassResponse } from '@interfaces/resetPassInterface';
import api from '../api';

export function resetPassService ():IResetPass {
	async function resetPass(email: IBodyResetPass): Promise<IResetPassResponse> {
		return api.post('/reset', email);
	}

	return { resetPass };
}
