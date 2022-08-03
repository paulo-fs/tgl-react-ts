import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@store/store';

import { BetButton } from '@components/Buttons/BetButton';
import { CartComponent } from './components/CartComponent';
import { FooterButtonsComponent } from './components/FooterButtonsComponent';
import { BetNumbersComponent } from './components/BetNumbersComponent';

import { gamesServices } from '../../shared/services/Games/gamesServices';
import { GamesDataTypes } from '@interfaces/gamesServicesInterface';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { cartActions } from '@store/slices/cartSlice';

import { BetContainer, BetPageContainer, ChooseAGame, HeaderContainer } from './betStyles';

export function Bet(){
	const { getGamesData } = gamesServices();
	const dispatch = useAppDispatch();

	const { games, selectedGame, incompleteBet } = useSelector((state: RootState) => state.gamesInfo);

 	useEffect(() => {
		getGamesData()
			.then(response => {
				dispatch(gamesInfoActions.storeGamesInfo(response.types));
				dispatch(cartActions.storeMinCartValue(response.min_cart_value));
			});
	}, []);

	function selectGameHandler(id: number){
		const incBet = {
			type: selectedGame.type,
			numbers: selectedGame.betNumbers
		};
		dispatch(gamesInfoActions.icompleteBetHandler(incBet));
		dispatch(gamesInfoActions.selectGame({id, incompleteBet}));
	}

	return(
		<BetPageContainer>
			<BetContainer>
				<HeaderContainer>
					<h1>
            Nova aposta <span>para {selectedGame?.type}</span>
					</h1>
				</HeaderContainer>

				<ChooseAGame>
					<h2>Escolha um jogo</h2>
					<nav>
						{games.map((game: GamesDataTypes) => {
							const selected = (game.id === selectedGame!.id);
							return (
								<BetButton
									key={game.id}
									color={game.color}
									isSelected={selected}
									onClick={() => selectGameHandler(game.id)}
								>{game.type}</BetButton>
							);
						})}
					</nav>
				</ChooseAGame>

				<main>
					<div>
						<h3>Preencha sua aposta</h3>
						<p>
							{selectedGame?.description}
						</p>
					</div>

					<BetNumbersComponent />
				</main>

				<FooterButtonsComponent />
			</BetContainer>

			<CartComponent />
		</BetPageContainer>
	);
}
