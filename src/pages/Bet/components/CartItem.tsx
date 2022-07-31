import { RootState } from '@store/store';
import { Trash } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { CartItemContainer, DeleteBtn } from './cartItemStyle';

export function CartItem(){
	const { betList, cartTotalValue } = useSelector((state: RootState) => state.cart);

	return (
		<CartItemContainer>
			<DeleteBtn>
				<Trash size={24} />
			</DeleteBtn>
			<div className='cartInfos'>
				<p>
                  01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25
				</p>
				<h4>Lotofácil <span>R${cartTotalValue}</span></h4>
			</div>
		</CartItemContainer>
	);
}
