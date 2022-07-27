import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import uiAuthSlice from './slices/uiAuthSlice';

const store = configureStore({
	reducer: {
		uiAuth: uiAuthSlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
