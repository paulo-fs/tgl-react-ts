import { cartActions } from '@store/slices/cartSlice';
import { ModalActionOptions } from '@store/slices/modalActionsOptions';
import { modalActions } from '@store/slices/modalSlice';
import { RootState, useAppDispatch } from '@store/store';
import { ArrowRight } from 'phosphor-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CartContainer, CartContent, CartFooter, EmptyCart, } from './cartComponentStyle';
import { CartItem } from './CartItem';

export function moneyValueConverter(value: number){
	return value.toFixed(2).replace('.', ',');
}

let firstRender = true;

export function CartComponent(){
	const dispatch = useAppDispatch();
	const { betList, cartTotalValue, minCartValue, mobileDisplay } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
	  if(firstRender){
	    firstRender = false;
			const cartDataJSON = localStorage.getItem('@tgl-1.0:cart-data');
			cartDataJSON
				? dispatch(cartActions.updateCartSlice(cartDataJSON))
				: '';
	  }
	}, []);

	function saveCartHandler(){
		const modalData = {
			message: `Você está salvando um carrinho com ${betList!.length} apostas no valor de R$${moneyValueConverter(cartTotalValue)}. Você confirma esta ação?`,
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
		<CartContainer onClick={() => dispatch(cartActions.changeMobileDisplay())}>
			<h2>Carrinho
				{betList!.length > 0 &&
          <span>
            ({ betList?.length } { betList!.length === 1 ? 'item' : 'items'})
          </span>
				}
			</h2>
			<CartContent mobileDisplay={mobileDisplay}>
				<div className='cartContent'>

					{ betList!.length === 0 &&
            <EmptyCart>O carrinho está vazio, <br/>faça uma aposta!</EmptyCart>}
					{ betList!.length > 0 && betList?.map(bet => (
						<CartItem key={bet.id} bet={bet} />
					))}

				</div>
			</CartContent>

			<CartFooter mobileDisplay={mobileDisplay}>
				<div>
					<p>
						<span> Total: R${moneyValueConverter(cartTotalValue)}</span>
					</p>
					<span className='minCartValue'>
            Valor mínimo do carrinho: R${moneyValueConverter(minCartValue)}
					</span>
				</div>
				<div className='save'>
					<button onClick={saveCartHandler}>
              Salvar
						<ArrowRight color='#27C383'/>
					</button>
				</div>
			</CartFooter>
		</CartContainer>
	);
}
