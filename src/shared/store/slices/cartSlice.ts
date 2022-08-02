import { addToCartPayloadType, InitStateType, UpdateCartOnLocalStorageType } from '@interfaces/cartSliceInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState: InitStateType = {
	betList: [],
	cartTotalValue: 0,
	firstRender: true,
	minCartValue: 0
};

function updateCartOnLocalStorage ({betList, cartTotalValue}: UpdateCartOnLocalStorageType){
	localStorage.removeItem('@tgl-1.0:cart-data');
	const cartData = {betList, cartTotalValue};
	const cartDataJSON = JSON.stringify(cartData);
	if(cartDataJSON)
	  localStorage.setItem('@tgl-1.0:cart-data', cartDataJSON);
}

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

			const cartData = { betList: state.betList!, cartTotalValue: state.cartTotalValue };
			updateCartOnLocalStorage(cartData);
		},

		deleteFromCart(state, action: PayloadAction<string>){
			const id = action.payload;
			const curPrice = state.betList?.find(bet => bet.id === id)?.price;
			const index = state.betList!.findIndex(bet => bet.id === id);
			if(index !== -1 && curPrice){
				state.betList!.splice(index, 1);
				state.cartTotalValue -= curPrice;
			}
			const cartData = { betList: state.betList!, cartTotalValue: state.cartTotalValue };
			updateCartOnLocalStorage(cartData);
		},

		updateCartSlice(state, action: PayloadAction<string>){
			const {betList, cartTotalValue} = JSON.parse(action.payload);
			state.betList = betList;
			state.cartTotalValue = cartTotalValue;
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice;
