import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalActionOptions {
  CLEAR_GAME = 'CLEAR_GAME',
  DELETE_BET = 'DELETE_BET'
}

interface ModalPayloadType{
  message: string
  action: ModalActionOptions
  id?: string
}

const initState = {
	isOpen: false,
	modalMessage: '',
	modalAction: '',
	id: ''
};

const modalSlice = createSlice({
	name: 'modalSlie',
	initialState: initState,
	reducers: {
		showModal(state, action: PayloadAction<ModalPayloadType>){
			state.isOpen = true;
			state.modalMessage = action.payload.message;
			state.modalAction = action.payload.action;
			if(action.payload.id)
			  state.id = action.payload.id;
		},

		closeModal(state){
			state.isOpen = false;
		},

		clearModalData(state){
			state.isOpen = false;
			state.modalMessage = '';
			state.modalAction = '';
			state.id = '';
		}
	}
});

export const modalActions = modalSlice.actions;
export default modalSlice;
