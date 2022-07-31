import { RootState } from '@store/store';
import { ArrowRight } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { CartContainer, CartContent, CartFooter, } from './cartComponentStyle';
import { CartItem } from './CartItem';

export function CartComponent(){
	const { betList, cartTotalValue } = useSelector((state: RootState) => state.cart);

	return (
		<CartContainer>
			<CartContent>
				<h2>Cart</h2>
				<div className='cartContent'>
					<CartItem />
				</div>
			</CartContent>

			<CartFooter>
				<p>
            Cart <span>Total: R${cartTotalValue}</span>
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
