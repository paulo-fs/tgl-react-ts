import { gamesInfoActions } from '@store/slices/gamesSlice';
import { useAppDispatch } from '@store/store';
import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';

export function FooterButtonsComponent(){
	const dispatch = useAppDispatch();

	function clearGame(){
		dispatch(gamesInfoActions.clearGame());
	}

	return (
		<FooterButtons>
			<div>
				<SecBtn>Complete game</SecBtn>
				<SecBtn onClick={clearGame}>Clear game</SecBtn>
			</div>
			<AddToCart>
				<ShoppingCartSimple size={24} color="#fff" />
            Add to cart
			</AddToCart>
		</FooterButtons>
	);
}
