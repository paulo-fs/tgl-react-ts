import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { ArrowRight, ShoppingCartSimple, Trash } from 'phosphor-react';
import { AddToCart, BetButton, BetContainer, BetNumbers, BetPageContainer, CartContainer, CartContent, CartFooter, CartItem, ChooseAGame, DeleteBtn, FooterButtons, HeaderContainer, SecBtn } from './betStyles';

export function Bet(){
	function createNumbers(){
		const arr: number[] = [];
		for(let i = 1; i <= 40; i++){
			arr.push(i);
		}
		return arr;
	}

	return(
		<BetPageContainer>
			<BetContainer>
				<HeaderContainer>
					<h1>
            New Bet <span>for Mega-Sena</span>
					</h1>
				</HeaderContainer>

				<ChooseAGame>
					<h2>Choose a game</h2>
					<nav>
						<BetButton>Lotofácil</BetButton>
						<BetButton>Mega-Sena</BetButton>
						<BetButton>Lotomania</BetButton>
					</nav>
				</ChooseAGame>

				<main>
					<div>
						<h3>Fill your bet</h3>
						<p>
              Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
						</p>
					</div>

					<BetNumbers>
						{
							createNumbers().map(i => {
								return (
									<NumbersBtn key={i}>
										{i < 10 ? '0'+String(i) : String(i)}
									</NumbersBtn>
								);
							})
						}
					</BetNumbers>
				</main>

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
			</BetContainer>

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
		</BetPageContainer>
	);
}
