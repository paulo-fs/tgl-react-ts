import { useEffect } from 'react';

import { BetButton } from '@components/Buttons/BetButton';
import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { CartComponent } from './components/CartComponent';

import { AddToCart, BetContainer, BetNumbers, BetPageContainer, ChooseAGame, FooterButtons, HeaderContainer, SecBtn } from './betStyles';
import { ShoppingCartSimple } from 'phosphor-react';
import { gamesServices } from '../../shared/services/Games/gamesServices';
import { RootState, useAppDispatch } from '@store/store';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { useSelector } from 'react-redux';
import { GamesDataTypes } from '@interfaces/gamesServicesInterface';

export function Bet(){
	const { getGamesData } = gamesServices();
	const dispatch = useAppDispatch();
	const gamesInfo = useSelector<RootState>(state => state.gamesInfo.gamesInfo);
	const selectedGame = useSelector<RootState>(state => state.gamesInfo.selectedGame);

	useEffect(() => {
		getGamesData()
			.then(response => {
				dispatch(gamesInfoActions.storeGamesInfo(response.types));
			});
	}, [getGamesData]);

	function selectGameHandler(id: number){
		dispatch(gamesInfoActions.selectGame(id));
	}

	function createNumbers(){
		const totalNumbers = selectedGame.range;
		const gameNumber: number[] = [];
		for(let i = 1; i <= totalNumbers; i++){
			gameNumber.push(i);
		}
		return gameNumber;
	}

	return(
		<BetPageContainer>
			<BetContainer>
				<HeaderContainer>
					<h1>
            New Bet <span>for {selectedGame.type}</span>
					</h1>
				</HeaderContainer>

				<ChooseAGame>
					<h2>Choose a game</h2>
					<nav>
						{gamesInfo.map((game: GamesDataTypes) => {
							return (
								<BetButton
									key={game.id}
									onClick={() => selectGameHandler(game.id)}
								>{game.type}</BetButton>
							);
						})}
					</nav>
				</ChooseAGame>

				<main>
					<div>
						<h3>Fill your bet</h3>
						<p>
							{selectedGame?.description}
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
