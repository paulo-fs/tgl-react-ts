import { BetButton } from '@components/Buttons/BetButton';
import { moneyValueConverter } from '@pages/Bet/components/CartComponent';
import { betHistoryActions } from '@store/slices/betHistorySlice';
import { RootState, useAppDispatch } from '@store/store';
import { ArrowRight } from 'phosphor-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { betService } from '../../shared/services/Bets/betService';
import { HeaderHistory, HistoryItem, MainHistory, VerticalBar } from './betHistoryStyles';

export function BetHistory(){
	const { getBetsData } = betService();
	const dispatch = useAppDispatch();
	const { savedBets } = useSelector((state: RootState) => state.betHistory);
	const { games } = useSelector((state: RootState) => state.gamesInfo);

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
					<h1>Apostas Recentes</h1>
					<nav>
						<p>Filtrar</p>
						{
							games.map(bet => {
								return (
									<BetButton
										key={bet.id}
										color={bet.color}
										isSelected={false}
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

			<MainHistory>
				{
					savedBets.map(bet => {
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
		</>
	);
}
