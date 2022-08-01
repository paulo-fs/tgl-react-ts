import { cartActions } from '@store/slices/cartSlice';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';

import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';
import 'react-toastify/dist/ReactToastify.css';

export function FooterButtonsComponent(){
	const dispatch = useAppDispatch();
	const { selectedGame } = useSelector((state: RootState) => state.gamesInfo);

	function clearGame(){
		dispatch(gamesInfoActions.clearGame());
	}

	function completeGame(){
		dispatch(gamesInfoActions.completeGame());
	}

	function addToCart(){
		const gameToBeAdd = {
			type: selectedGame.type,
			numbers: selectedGame.betNumbers,
			price: selectedGame.price,
			color: selectedGame.color
		};
		dispatch(cartActions.addToCart(gameToBeAdd));
		dispatch(gamesInfoActions.clearGame());
	}

	return (
		<FooterButtons>
			<div>
				<SecBtn onClick={completeGame}>Complete game</SecBtn>
				<SecBtn onClick={clearGame}>Clear game</SecBtn>
			</div>
			<AddToCart onClick={addToCart}>
				<ShoppingCartSimple size={24} color="#fff" />
            Add to cart
			</AddToCart>
		</FooterButtons>
	);
}
