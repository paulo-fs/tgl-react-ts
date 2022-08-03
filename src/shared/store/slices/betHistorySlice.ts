import { IAllBets } from '@interfaces/betServiceInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
  savedBets: IAllBets[]
  selectedGames: number[]
}

const initState: InitState = {
	savedBets: [],
	selectedGames: []
};

const betHistorySlice = createSlice({
	name: 'betHistory',
	initialState: initState,
	reducers: {
		storeBetHistory(state, action: PayloadAction<IAllBets[]>){
			state.savedBets = action.payload;
		},

		handleSelectedGames(state, action: PayloadAction<number>){
			const id = action.payload;
			const index = state.selectedGames.indexOf(id);
			state.selectedGames.includes(id)
				? state.selectedGames.splice(index, 1)
				: state.selectedGames.push(id);
		},
	}
});

export const betHistoryActions = betHistorySlice.actions;
export default betHistorySlice;
