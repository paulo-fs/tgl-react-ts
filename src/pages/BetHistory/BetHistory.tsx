import { BetButton } from '@components/Buttons/BetButton';
import { ArrowRight } from 'phosphor-react';
import { HeaderHistory, HistoryItem, MainHistory, NewBetBtn, VerticalBar } from './betHistoryStyles';

export function BetHistory(){
	return (
		<>
			<HeaderHistory>
				<div>
					<h1>Recent Games</h1>
					<nav>
						<p>Filters</p>
						<BetButton>Lotofácil</BetButton>
						<BetButton>Mega-Sena</BetButton>
						<BetButton>Lotomania</BetButton>
					</nav>
				</div>
				<NewBetBtn>
          New Bet
					<ArrowRight size={24} color='#B5C401' />
				</NewBetBtn>
			</HeaderHistory>

			<MainHistory>
				<HistoryItem>
				  <VerticalBar></VerticalBar>
					<div>
						<p className='numbers'>
              01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25
						</p>
						<p className='date'>30/11/2020 - (R$ 2,50)</p>
						<p className='game'>Lotofácil</p>
					</div>
				</HistoryItem>

				<HistoryItem>
				  <VerticalBar></VerticalBar>
					<div>
						<p className='numbers'>
              01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25
						</p>
						<p className='date'>30/11/2020 - (R$ 2,50)</p>
						<p className='game'>Lotofácil</p>
					</div>
				</HistoryItem>
			</MainHistory>
		</>
	);
}
