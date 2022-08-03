import { ILoginResponse, Token, User } from '@interfaces/authInterfaces';
import { IResetPassResponse } from '@interfaces/resetPassInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitStateType {
  isAuthenticated: boolean,
  token: Token | undefined
  user: User | undefined
  resetPassToken: string
  email: string
}

const initState: InitStateType = {
	isAuthenticated: false,
	token: undefined,
	user: undefined,
	resetPassToken: '',
	email: ''
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		login(state, action: PayloadAction<ILoginResponse>){
			state.isAuthenticated = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},

		logout(state){
			state.isAuthenticated = false;
			state.token = undefined;
			state.user = undefined;
			state.resetPassToken = '';
			state.email = '';
			localStorage.removeItem('@tgl-1.0:auth-data');
		},

		resetPass(state, action: PayloadAction<IResetPassResponse>){
			state.isAuthenticated = false;
			state.token = undefined;
			state.resetPassToken = action.payload.token;
			state.email = action.payload.email;
		}
	}
});

export const authActions = authSlice.actions;
export default authSlice;
