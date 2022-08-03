import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { betService } from '../../shared/services/Bets/betService';

import { RootState, useAppDispatch } from '@store/store';
import { moneyValueConverter } from '@pages/Bet/components/CartComponent';
import { betHistoryActions } from '@store/slices/betHistorySlice';
import { BetButton } from '@components/Buttons/BetButton';

import { EmptyBetList, HeaderHistory, HistoryItem, MainHistory, VerticalBar } from './betHistoryStyles';
import { ArrowRight } from 'phosphor-react';

export function BetHistory(){
	const { getBetsData } = betService();
	const dispatch = useAppDispatch();
	const { savedBets, selectedGames } = useSelector((state: RootState) => state.betHistory);
	const { games } = useSelector((state: RootState) => state.gamesInfo);

	const filteredBets = savedBets.filter(bet => {
		if(selectedGames.includes(bet.game_id)){
			return bet;
		}
	});

	const selectedBetList = filteredBets.length > 0
		? filteredBets
		: savedBets;


	useEffect(() => {
		const toastGetSavedBets = toast.loading('Carregando dados...');
		getBetsData().then(response => {
			toast.update(toastGetSavedBets, {render: 'Dados carregados!', type: 'success', isLoading: false, autoClose: 2000});
			dispatch(betHistoryActions.storeBetHistory(response));
		}).catch(error => {
			toast.update(toastGetSavedBets, {render: error.data.message, type: 'error', isLoading: false, autoClose: 2000});
		});
	}, []);

	function formatBetNumbers(betNumbers: number[]){
		const numbers = String(betNumbers).split(',');
		return numbers.map(number => (
			+number < 10
				? '0' + String(number)
				: String(number)
		)).join(', ');
	}

	function dateFormate(date: Date){
		const newDate = new Date(date);
		const day = newDate.getDate();
		const month = newDate.getMonth() + 1;
		const year = newDate.getFullYear();
		return `${day}/${month}/${year}`;
	}

	return (
		<>
			<HeaderHistory>
				<div>
					<h1>Apostas Salvas</h1>
					<nav>
						<p>Filtrar</p>
						{
							games.map(bet => {
								const isSelected = selectedGames.includes(bet.id);
								return (
									<BetButton
										key={bet.id}
										color={bet.color}
										isSelected={isSelected}
										onClick={() => dispatch(betHistoryActions.handleSelectedGames(bet.id))}
									>
										{bet.type}
									</BetButton>
								);
							})
						}
					</nav>
				</div>
				<Link className='newBet' to='/bet'>
          Nova aposta
					<ArrowRight size={24} color='#B5C401' />
				</Link>
			</HeaderHistory>

			{ selectedBetList.length === 0 &&
        <EmptyBetList>
        	<h3>Você ainda não tem apostas salvas,</h3>
        	<h1>Faça suas apostas!</h1>
        </EmptyBetList>
			}

			{ selectedBetList.length > 0 &&
        <MainHistory>
        	{
        		selectedBetList.map(bet => {
        			return (
        				<HistoryItem key={bet.id} color={bet.type.color}>
        					<VerticalBar color={bet.type.color}></VerticalBar>
        					<div>
        						<p className='numbers'>
        							{formatBetNumbers(bet.choosen_numbers)}
        						</p>
        						<p className='date'>{`${dateFormate(bet.created_at)} - (R$${moneyValueConverter(bet.price)})`}</p>
        						<p className='game'>{bet.type.type}</p>
        					</div>
        				</HistoryItem>
        			);
        		})
        	}
        </MainHistory>
			}
		</>
	);
}
