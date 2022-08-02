import { IAllBets } from '@interfaces/betServiceInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
  savedBets: IAllBets[]
}

const initState: InitState = {
	savedBets: []
};

const betHistorySlice = createSlice({
	name: 'betHistory',
	initialState: initState,
	reducers: {
		storeBetHistory(state, action: PayloadAction<IAllBets[]>){
			state.savedBets = action.payload;
		}
	}
});

export const betHistoryActions = betHistorySlice.actions;
export default betHistorySlice;
