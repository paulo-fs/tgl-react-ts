import { addToCartPayloadType, InitStateType } from '@interfaces/cartSliceInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
				price: action.payload.price,
				color: action.payload.color
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
			toast.success('Bet added!');
		},

		deleteFromCart(state, action: PayloadAction<string>){
			const id = action.payload;
			const curPrice = state.betList?.find(bet => bet.id === id)?.price;
			const index = state.betList!.findIndex(bet => bet.id === id);
			if(index !== -1 && curPrice){
				state.betList!.splice(index, 1);
				state.cartTotalValue -= curPrice;
			}
			toast.success('Bet deleted!');
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice;
