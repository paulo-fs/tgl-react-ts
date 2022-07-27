import { ArrowRight, Trash } from 'phosphor-react';
import { CartContainer, CartContent, CartFooter, CartItem, DeleteBtn } from './cartComponentStyle';

export function CartComponent(){
	return (
		<CartContainer>
			<CartContent>
				  <h2>Cart</h2>
				<div className='cartContent'>
					<CartItem>
						<DeleteBtn>
							  <Trash size={24} />
						</DeleteBtn>
						<div className='cartInfos'>
							<p>
                  01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25
							</p>
							<h4>Lotofácil <span>R$2,50</span></h4>
						</div>
					</CartItem>
					<CartItem>
						<DeleteBtn>
							  <Trash size={24} />
						</DeleteBtn>
						<div className='cartInfos'>
							<p>
                  01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25
							</p>
							<h4>Lotofácil <span>R$2,50</span></h4>
						</div>
					</CartItem>
				</div>
			</CartContent>

			<CartFooter>
				<p>
            Cart <span>Total: R$7,00</span>
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
