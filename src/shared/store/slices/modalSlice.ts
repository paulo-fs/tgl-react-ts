import { createSlice } from '@reduxjs/toolkit';

const initState = {
	isOpen: false,
	isConfirmed: false
};

const modalSlice = createSlice({
	name: 'modalSlie',
	initialState: initState,
	reducers: {
		showModal(state){
			console.log('show modal');
			state.isOpen = true;
		},

		closeModal(state){
			state.isOpen = false;
		}
	}
});

export const modalActions = modalSlice.actions;
export default modalSlice;
