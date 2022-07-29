// import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { BetNumbers, BtnNumber } from './betNumbersComponentStyles';

export function BetNumbersComponent(){
	const dispatch = useAppDispatch();
	const { selectedGame, selectedNumbers } = useSelector((state: RootState) => state.gamesInfo);

	function createNumbers(){
		const totalNumbers = selectedGame?.range;
		const gameNumber: number[] = [];
		for(let i = 1; i <= totalNumbers!; i++){
			gameNumber.push(i);
		}
		return gameNumber;
	}

	function selectNumberHandler(i: number){
		dispatch(gamesInfoActions.selectTheNumber(i));
	}

	return (
		<BetNumbers>
			{
				createNumbers().map(i => {
					const content = i < 10 ? '0'+String(i) : String(i);
					const selected = selectedNumbers.includes(i);
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
