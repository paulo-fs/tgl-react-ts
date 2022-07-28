import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesDataTypes } from '../../interfaces/gamesServicesInterface';

interface IinitState {
  gamesInfo: GamesDataTypes[]
  selectedGame: GamesDataTypes | null
}

const initState: IinitState = {
	gamesInfo: [],
	selectedGame: null
};

const gamesSlice = createSlice({
	name: 'games',
	initialState: initState,
	reducers: {
		storeGamesInfo(state, action: PayloadAction<GamesDataTypes[]>){
			state.gamesInfo = action.payload;
		},
		selectGame(state, action: PayloadAction<number>){
			state.selectedGame = state.gamesInfo[action.payload];
		}
	}
});

export const gamesInfoActions = gamesSlice.actions;
export default gamesSlice;
