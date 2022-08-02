import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './slices/authSlice';
import betHistorySlice from './slices/betHistorySlice';
import cartSlice from './slices/cartSlice';
import gamesSlice from './slices/gamesSlice';
import modalSlice from './slices/modalSlice';
import uiAuthSlice from './slices/uiAuthSlice';

const store = configureStore({
	reducer: {
		uiAuth: uiAuthSlice.reducer,
		gamesInfo: gamesSlice.reducer,
		cart: cartSlice.reducer,
		modal: modalSlice.reducer,
		auth: authSlice.reducer,
		betHistory: betHistorySlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;
