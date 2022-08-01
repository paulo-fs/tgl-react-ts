import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalActionOptions {
  CLEAR_GAME = 'CLEAR_GAME',
  DELETE_BET = 'DELETE_BET'
}

interface ModalPayloadType{
  message: string
  action: ModalActionOptions
}

const initState = {
	isOpen: false,
	modalMessage: '',
	modalAction: ''
};

const modalSlice = createSlice({
	name: 'modalSlie',
	initialState: initState,
	reducers: {
		showModal(state, action: PayloadAction<ModalPayloadType>){
			state.isOpen = true;
			state.modalMessage = action.payload.message;
			state.modalAction = action.payload.action;
		},

		closeModal(state){
			state.isOpen = false;
		},

		clearModalData(state){
			state.isOpen = false;
			state.modalMessage = '';
			state.modalAction = '';
		}
	}
});

export const modalActions = modalSlice.actions;
export default modalSlice;
