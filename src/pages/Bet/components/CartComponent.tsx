import { RootState } from '@store/store';
import { ArrowRight } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { CartContainer, CartContent, CartFooter, EmptyCart, } from './cartComponentStyle';
import { CartItem } from './CartItem';

export function moneyValueConverter(value: number){
	return value.toFixed(2).replace('.', ',');
}

export function CartComponent(){
	const { betList, cartTotalValue } = useSelector((state: RootState) => state.cart);

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
				<p>
            Cart <span>Total: R${moneyValueConverter(cartTotalValue)}</span>
				</p>
				<div>
					<button>
              Save
						<ArrowRight color='#27C383'/>
					</button>
				</div>
			</CartFooter>
		</CartContainer>
	);
}
