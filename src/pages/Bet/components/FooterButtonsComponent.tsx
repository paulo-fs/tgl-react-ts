import { cartActions } from '@store/slices/cartSlice';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';
import { modalActions } from '@store/slices/modalSlice';
import { ModalActionOptions } from '@store/slices/modalActionsOptions';


export function FooterButtonsComponent(){
	const dispatch = useAppDispatch();
	const { selectedGame } = useSelector((state: RootState) => state.gamesInfo);

	function clearGame(){
		const modalData = {
			message: `Tem certeza que deseja limpar este jogo (${selectedGame.type})?`,
			action: ModalActionOptions.CLEAR_GAME,
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
			gameId: selectedGame.id,
			numbers: selectedGame.betNumbers,
			price: selectedGame.price,
			color: selectedGame.color,
		};
		if(missing !== 0){
			const message = `Escolha mais ${missing} ${missing === 1 ? 'número' : 'números'} para completar a aposta!`;
			toast.warn(message);
			return;
		}
		dispatch(cartActions.addToCart(gameToBeAdd));
		dispatch(gamesInfoActions.clearGame());
		toast.success('Aposta adicionada ao carrinho!');
	}

	return (
		<FooterButtons>
			<div>
				<SecBtn onClick={completeGame}>Completar jogo</SecBtn>
				<SecBtn onClick={clearGame}>Limpar jogo</SecBtn>
			</div>
			<AddToCart onClick={addToCart}>
				<ShoppingCartSimple size={24} color="#fff" />
            Adicionar ao carrinho
			</AddToCart>
		</FooterButtons>
	);
}
