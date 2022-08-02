import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthComponentType {
  LOGIN_COMPONENT = 'LOGIN_COMPONENT',
  RESET_PASSWORD_COMPONENT = 'RESET_PASSWORD_COMPONENT',
  REGISTER_COMPONENT = 'REGISTER_COMPONENT',
  NULL = 'null'
}

const initState = {
	visibleComponent: AuthComponentType.LOGIN_COMPONENT
};

const uiAuthSlice = createSlice({
	name: 'ui',
	initialState: initState,
	reducers: {
		toggleComponent(state, action: PayloadAction<AuthComponentType>){
			state.visibleComponent = action.payload;
		}
	}
});

export const uiAuthActions = uiAuthSlice.actions;
export default uiAuthSlice;
