import { addToCartPayloadType } from '@interfaces/cartSliceInterface';
import { cartActions } from '@store/slices/cartSlice';
import { useAppDispatch } from '@store/store';
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
	const dispatch = useAppDispatch();

	function formatBetNumbers(betNumbers: number[]){
		return betNumbers.map(number => (
			number < 10
				? '0' + String(number)
				: String(number)
		)).join(', ');
	}

	function deleteHundler(){
		dispatch(cartActions.deleteFromCart(id));
	}

	return (
		<CartItemContainer gameColor={color}>
			<DeleteBtn onClick={deleteHundler}>
				<Trash size={24} />
			</DeleteBtn>
			<div className='cartInfos'>
				<p>
					{ formatBetNumbers(numbers) }
				</p>
				<h4>{ type } <span>R${moneyValueConverter(price)}</span></h4>
			</div>
		</CartItemContainer>
	);
}
