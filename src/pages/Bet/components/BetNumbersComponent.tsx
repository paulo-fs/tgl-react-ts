import { NumbersBtn } from '@components/Buttons/NumbersBtn';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { BetNumbers } from './betNumbersComponentStyles';

export function BetNumbersComponent(){
	const gamesInfo = useSelector<RootState>(state => state.gamesInfo.gamesInfo);
	const selectedGame = useSelector<RootState>(state => state.gamesInfo.selectedGame);

	function createNumbers(){
		const totalNumbers = selectedGame?.range;
		const gameNumber: number[] = [];
		for(let i = 1; i <= totalNumbers; i++){
			gameNumber.push(i);
		}
		return gameNumber;
	}

	return (
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
	);
}
