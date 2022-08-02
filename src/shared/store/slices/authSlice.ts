import { ILoginResponse, Token, User } from '@interfaces/authInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitStateType {
  isAuthenticated: boolean,
  token: Token | undefined
  user: User | undefined
}

const initState: InitStateType = {
	isAuthenticated: false,
	token: undefined,
	user: undefined
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
			localStorage.removeItem('@tgl-1.0:auth-data');
		},
	}
});

export const authActions = authSlice.actions;
export default authSlice;
