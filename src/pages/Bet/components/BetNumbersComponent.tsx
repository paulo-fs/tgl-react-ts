// import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { betStateActions } from '@store/slices/betSlie';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { BetNumbers, BtnNumber } from './betNumbersComponentStyles';

export function BetNumbersComponent(){
	const dispatch = useAppDispatch();
	const { selectedGame, } = useSelector((state: RootState) => state.gamesInfo);
	const { incompleteBet } = useSelector((state: RootState) => state.betState);

	function createNumbers(){
		const totalNumbers = selectedGame.range;
		const gameNumber: number[] = [];
		for(let i = 1; i <= totalNumbers!; i++){
			gameNumber.push(i);
		}
		return gameNumber;
	}

	function selectNumberHandler(i: number){
		const betValue = {
			type: selectedGame.type,
			num: i
		};
		dispatch(gamesInfoActions.selectTheNumber(i));
		dispatch(betStateActions.currentBetHander(betValue));
		console.log(incompleteBet.forEach(bet => console.log(bet.numbers)));
	}

	return (
		<BetNumbers>
			{
				createNumbers().map(i => {
					const content = i < 10 ? '0'+String(i) : String(i);
					const selected = selectedGame.betNumbers.includes(i);
					return (
						<BtnNumber key={i} isSelected={selected} onClick={() => selectNumberHandler(i)}>
							{content}
						</BtnNumber>
					);
				})
			}
		</BetNumbers>
	);
}
