import { cartActions } from '@store/slices/cartSlice';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';
import { ModalActionOptions, modalActions } from '@store/slices/modalSlice';


export function FooterButtonsComponent(){
	const dispatch = useAppDispatch();
	const { selectedGame } = useSelector((state: RootState) => state.gamesInfo);

	function clearGame(){
		const modalData = {
			message: 'Tem certeza que deseja limpar o jogo?',
			action: ModalActionOptions.CLEAR_GAME
		};
		dispatch(modalActions.showModal(modalData));
	}

	function completeGame(){
		dispatch(gamesInfoActions.completeGame());
	}

	function addToCart(){
		const missing = selectedGame.max_number - selectedGame.betNumbers.length;
		const gameToBeAdd = {
			type: selectedGame.type,
			numbers: selectedGame.betNumbers,
			price: selectedGame.price,
			color: selectedGame.color,
		};
		if(missing !== 0){
			const message = `Choose more ${missing} ${missing === 1 ? 'number' : 'numbers'} to complete this bet!`;
			toast.warn(message);
			return;
		}
		dispatch(cartActions.addToCart(gameToBeAdd));
		dispatch(gamesInfoActions.clearGame());
		toast.success('Bet added!');
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
