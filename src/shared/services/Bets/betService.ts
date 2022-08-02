import { IBetService, IGames, IAllBets } from '@interfaces/betServiceInterfaces';
import api from '../api';

export function betService():IBetService {
	async function getBetsData(): Promise<IAllBets[]> {
		return api.get('/bet/all-bets');
	}

	async function postBetsData({games}: IGames): Promise<IGames> {
		return api.post('/bet/new-bet', games);
	}

	return { getBetsData, postBetsData };
}
