import api from '../api';
import { IGameResponse, IGames } from '../../interfaces/gamesServicesInterface';

export function gamesServices():IGames {
	async function getGamesData(): Promise<IGameResponse> {
		return api.get('/cart_games');
	}

	return { getGamesData };
}


