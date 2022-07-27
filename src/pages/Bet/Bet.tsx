import { BetButton } from '@components/Buttons/BetButton';
import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { ShoppingCartSimple } from 'phosphor-react';
import { AddToCart, BetContainer, BetNumbers, BetPageContainer, ChooseAGame, FooterButtons, HeaderContainer, SecBtn } from './betStyles';
import { CartComponent } from './components/CartComponent';

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

			<CartComponent />
		</BetPageContainer>
	);
}
