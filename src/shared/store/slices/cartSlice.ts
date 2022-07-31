import { addToCartPayloadType, InitStateType } from '@interfaces/cartSliceInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState: InitStateType = {
	betList: [],
	cartTotalValue: 0,
	firstRender: true
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {
		addToCart(state, action: PayloadAction<addToCartPayloadType>){
			const id = String(new Date().getTime());
			const newBet = {
				id: id,
				type: action.payload.type,
				numbers: action.payload.numbers,
				price: action.payload.price
			};
			const isUnique = state.betList?.find(bet => bet.id === newBet.id);

			isUnique
				? ''
				: state.betList!.push(newBet);

			state.cartTotalValue = state.betList!
				.map(bet => bet.price)
				.reduce((total, currentValue) => {
					return total + currentValue;
				}, 0);
		}
	}
});

export const carActions = cartSlice.actions;
export default cartSlice;
