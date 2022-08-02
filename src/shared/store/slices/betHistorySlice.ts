import { createSlice } from '@reduxjs/toolkit';


const initState = {
	betList: []
};

const betHistorySlice = createSlice({
	name: 'betHistory',
	initialState: initState,
	reducers: {
		storeBetHistory(state, action){
			console.log('x');
		}
	}
});

export const betHistoryActions = betHistorySlice.actions;
export default betHistorySlice;
