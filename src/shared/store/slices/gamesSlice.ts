import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesDataTypes } from '../../interfaces/gamesServicesInterface';

interface GameTypes extends GamesDataTypes{
  betNumbers: number[]
}

const selectedGame: GameTypes = {
	id: 0,
	type: '',
	description: '',
	range: 0,
	price: 0,
	max_number: 0,
	color: '',
	betNumbers: []
};

interface IinitState {
  firstRender: boolean
  gamesInfo: GamesDataTypes[]
  games: GameTypes[]
  selectedGame: GameTypes
  selectedNumbers: number[]
}

const initState: IinitState = {
	firstRender: true,
	gamesInfo: [],
	games: [],
	selectedGame,
	selectedNumbers: [],
};

const gamesSlice = createSlice({
	name: 'games',
	initialState: initState,
	reducers: {
		storeGamesInfo(state, action: PayloadAction<GamesDataTypes[]>){
			state.gamesInfo = action.payload;
			state.games = state.gamesInfo.map(gameType => {
				return {...gameType, betNumbers: []};
			});
			if(state.firstRender === true){
			  state.selectedGame = state.games[0];
				state.firstRender = false;
			// state.selectedGame = state.gamesInfo[0];
			}
		},

		selectGame(state, action: PayloadAction<number>){
			const id = action.payload;
  	  state.selectedGame = state.games[id -1];
		},

		selectTheNumber(state, action: PayloadAction<number>){
			const number = action.payload;
			const index = state.selectedGame.betNumbers.findIndex(item => item === number);

			index === -1
				? state.selectedGame.betNumbers.push(number)
				: state.selectedGame.betNumbers.splice(index, 1);
		}
	}
});

export const gamesInfoActions = gamesSlice.actions;
export default gamesSlice;
