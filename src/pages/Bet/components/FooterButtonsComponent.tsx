import { carActions } from '@store/slices/cartSlice';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { ShoppingCartSimple } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';

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
		dispatch(carActions.addToCart(gameToBeAdd));
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
