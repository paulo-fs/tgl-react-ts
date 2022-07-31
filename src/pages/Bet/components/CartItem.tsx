import { addToCartPayloadType } from '@interfaces/cartSliceInterface';
import { Trash } from 'phosphor-react';
import { moneyValueConverter } from './CartComponent';
import { CartItemContainer, DeleteBtn } from './cartItemStyle';

interface BetPropType extends addToCartPayloadType {
  id: string
}

interface PropType {
  bet: BetPropType;
}

export function CartItem({ bet }: PropType){

	const { color, id, numbers, price, type } = bet;

	return (
		<CartItemContainer>
			<DeleteBtn>
				<Trash size={24} />
			</DeleteBtn>
			<div className='cartInfos'>
				<p>
					{ numbers }
				</p>
				<h4>{ type } <span>R${moneyValueConverter(price)}</span></h4>
			</div>
		</CartItemContainer>
	);
}
