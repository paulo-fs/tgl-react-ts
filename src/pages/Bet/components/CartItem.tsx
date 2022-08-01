import { addToCartPayloadType } from '@interfaces/cartSliceInterface';
import { ModalActionOptions } from '@store/slices/modalActionsOptions';
import { modalActions } from '@store/slices/modalSlice';
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
		const modalData = {
			message: 'Você está certo de que deseja excluir esta aposta?',
			action: ModalActionOptions.DELETE_BET,
			id: id
		};
		dispatch(modalActions.showModal(modalData));
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
