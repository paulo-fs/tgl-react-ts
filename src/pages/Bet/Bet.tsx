import { useEffect } from 'react';

import { BetButton } from '@components/Buttons/BetButton';
import { CartComponent } from './components/CartComponent';
import { FooterButtonsComponent } from './components/FooterButtonsComponent';
import { BetNumbersComponent } from './components/BetNumbersComponent';

import { BetContainer, BetPageContainer, ChooseAGame, HeaderContainer } from './betStyles';
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

	return(
		<BetPageContainer>
			<BetContainer>
				<HeaderContainer>
					<h1>
            New Bet <span>for {selectedGame?.type}</span>
					</h1>
				</HeaderContainer>

				<ChooseAGame>
					<h2>Choose a game</h2>
					<nav>
						{gamesInfo.map((game: GamesDataTypes) => {
							const selected = (game.id === selectedGame.id);
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
						<h3>Fill your bet</h3>
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
