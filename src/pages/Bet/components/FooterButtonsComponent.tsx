import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, FooterButtons, SecBtn } from './footerButtonsComponentStyles';

export function FooterButtonsComponent(){
	return (
		<FooterButtons>
			<div>
				<SecBtn>Complete game</SecBtn>
				<SecBtn>Clear game</SecBtn>
			</div>
			<AddToCart>
				<ShoppingCartSimple size={24} color="#fff" />
            Add to cart
			</AddToCart>
		</FooterButtons>
	);
}
