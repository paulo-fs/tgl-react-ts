import { BetType, GameTypes, selectGamePropTypes } from '@interfaces/gameSliceInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { GamesDataTypes } from '../../interfaces/gamesServicesInterface';

const selectedGame: GameTypes = {
	id: 0,
	type: '',
	description: '',
	range: 0,
	price: 0,
	max_number: 0,
	color: '',
	betNumbers: []
};

const emptyBet = {
	type: '',
	numbers: [1]
};

interface IinitState {
  firstRender: boolean
  games: GameTypes[]
  selectedGame: GameTypes
  selectedNumbers: number[],
  incompleteBet: BetType[]
}

const initState: IinitState = {
	firstRender: true,
	games: [],
	selectedGame,
	selectedNumbers: [],
	incompleteBet: [emptyBet]
};

const gamesSlice = createSlice({
	name: 'games',
	initialState: initState,
	reducers: {
		storeGamesInfo(state, action: PayloadAction<GamesDataTypes[]>){
			state.games = action.payload.map(gameType => {
				return {...gameType, betNumbers: []};
			});
			if(state.firstRender === true){
			  state.selectedGame = state.games[0];
				state.firstRender = false;
			}
		},

		selectGame(state, action: PayloadAction<selectGamePropTypes>){
			const id = action.payload.id;
  	  state.selectedGame = state.games[id -1];

			const incompleteBets = action.payload.incompleteBet;
			const type = state.selectedGame.type;
			const curIncBet = incompleteBets.find(bet => bet.type === type);
			if(curIncBet){
				state.selectedGame.betNumbers = Array(...curIncBet.numbers);
			}
		},

		selectNumbers(state, action: PayloadAction<number>){
			const number = action.payload;
			const index = state.selectedGame.betNumbers.findIndex(item => item === number);
			const maxNumbers = state.selectedGame.max_number;

			if(state.selectedGame.betNumbers.length < maxNumbers){
				index === -1
					? state.selectedGame.betNumbers.push(number)
					: state.selectedGame.betNumbers.splice(index, 1);
			} else{
				index !== -1
					? state.selectedGame.betNumbers.splice(index, 1)
					: toast.error('Você já selecionou a quantidade máxima de números para este tipo de jogo.');
			}
		},

		icompleteBetHandler(state, action: PayloadAction<BetType>){
			const type = action.payload.type;
			const curIncompleteBet = state.incompleteBet.find(bet => bet.type === type);
			const curBet = action.payload.numbers;

			if(curIncompleteBet){
			  state.incompleteBet.find(bet => bet.type === type)!.numbers = Array(...curBet);
			} else {
				state.incompleteBet = [
					...state.incompleteBet,
					{
						type: type,
						numbers: Array(...action.payload.numbers)
					}];
			}
		},

		clearGame(state) {
			state.selectedGame.betNumbers = [];
		},

		completeGame(state){
			const maxNumbers = state.selectedGame.max_number;
			const totalAvaliable = state.selectedGame.range;

			for(let i = 0; i < 60; i++){
				const randownNum = Math.round(Math.random() * totalAvaliable);
				if(state.selectedGame.betNumbers.length < maxNumbers && randownNum > 0){
					state.selectedGame.betNumbers.find(num => num === randownNum)
						? ''
						: state.selectedGame.betNumbers.push(randownNum);
				}
			}
		}
	}
});

export const gamesInfoActions = gamesSlice.actions;
export default gamesSlice;
