import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesDataTypes } from '../../interfaces/gamesServicesInterface';

interface IinitState {
  gamesInfo: GamesDataTypes[]
  selectedGame: GamesDataTypes | null
  selectedNumbers: number[]
}

const initState: IinitState = {
	gamesInfo: [],
	selectedGame: null,
	selectedNumbers: [],
};

const gamesSlice = createSlice({
	name: 'games',
	initialState: initState,
	reducers: {
		storeGamesInfo(state, action: PayloadAction<GamesDataTypes[]>){
			state.gamesInfo = action.payload;
			if(state.selectedGame === null)
			  state.selectedGame = state.gamesInfo[0];
		},

		selectGame(state, action: PayloadAction<number>){
			const id = action.payload;
  	  state.selectedGame = state.gamesInfo[id -1];
		},

		selectTheNumber(state, action: PayloadAction<number>){
			const number = action.payload;
			const index = state.selectedNumbers.findIndex(item => item === number);
			index === -1
				? state.selectedNumbers.push(number)
				: state.selectedNumbers.splice(index, 1);
		}
	}
});

export const gamesInfoActions = gamesSlice.actions;
export default gamesSlice;
