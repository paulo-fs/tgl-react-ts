import { ModalActionOptions } from '@store/slices/modalActionsOptions';
import { modalActions } from '@store/slices/modalSlice';
import { RootState, useAppDispatch } from '@store/store';
import { ArrowRight } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CartContainer, CartContent, CartFooter, EmptyCart, } from './cartComponentStyle';
import { CartItem } from './CartItem';

export function moneyValueConverter(value: number){
	return value.toFixed(2).replace('.', ',');
}

export function CartComponent(){
	const dispatch = useAppDispatch();
	const { betList, cartTotalValue, minCartValue } = useSelector((state: RootState) => state.cart);


	function saveCartHandler(){
		const modalData = {
			message: 'Você tem certeza que deseja salvar o carrinho?',
			action: ModalActionOptions.SAVE_CART
		};
		if(cartTotalValue < minCartValue){
			const missingValue = minCartValue - cartTotalValue;
			const message = `Is missing more R$${moneyValueConverter(missingValue)} to complete the cart`;
			return toast.error(message);
		}
		dispatch(modalActions.showModal(modalData));
	}

	return (
		<CartContainer>
			<h2>Cart
				{betList!.length > 0 &&
          <span>
            ({ betList?.length } { betList!.length === 1 ? 'item' : 'items'})
          </span>
				}
			</h2>
			<CartContent>
				<div className='cartContent'>

					{ betList!.length === 0 &&
            <EmptyCart>The cart is empty, <br/>make a bet!</EmptyCart>}
					{ betList!.length > 0 && betList?.map(bet => (
						<CartItem key={bet.id} bet={bet} />
					))}

				</div>
			</CartContent>

			<CartFooter>
				<div>
					<p>
            Cart
						<span> Total: R${moneyValueConverter(cartTotalValue)}</span>
					</p>
					<span className='minCartValue'>
            Minimum cart value: R${moneyValueConverter(minCartValue)}
					</span>
				</div>
				<div className='save'>
					<button onClick={saveCartHandler}>
              Save
						<ArrowRight color='#27C383'/>
					</button>
				</div>
			</CartFooter>
		</CartContainer>
	);
}
