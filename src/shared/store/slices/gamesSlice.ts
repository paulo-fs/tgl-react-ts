import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesDataTypes } from '../../interfaces/gamesServicesInterface';

interface IinitState {
  gamesInfo: GamesDataTypes[]
  selectedGame: GamesDataTypes | null
}

const initState: IinitState = {
	gamesInfo: [],
	selectedGame: null,
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
		}
	}
});

export const gamesInfoActions = gamesSlice.actions;
export default gamesSlice;
