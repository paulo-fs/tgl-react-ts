import { addToCartPayloadType, InitStateType } from '@interfaces/cartSliceInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState: InitStateType = {
	betList: [],
	cartTotalValue: 0,
	firstRender: true,
	minCartValue: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {
		storeMinCartValue(state, action: PayloadAction<number>){
			state.minCartValue = action.payload;
		},

		addToCart(state, action: PayloadAction<addToCartPayloadType>){
			const id = String(new Date().getTime());
			const newBet = {
				id: id,
				gameId: action.payload.gameId,
				type: action.payload.type,
				numbers: action.payload.numbers,
				price: action.payload.price,
				color: action.payload.color,
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
		},

		deleteFromCart(state, action: PayloadAction<string>){
			const id = action.payload;
			const curPrice = state.betList?.find(bet => bet.id === id)?.price;
			const index = state.betList!.findIndex(bet => bet.id === id);
			if(index !== -1 && curPrice){
				state.betList!.splice(index, 1);
				state.cartTotalValue -= curPrice;
			}
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice;
