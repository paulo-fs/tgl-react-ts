import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BetType{
  type: string
  numbers: number[]
}

interface BetStateTypes {
  currentBet: BetType[]
  incompleteBet: BetType[]
}

interface BetValueProp {
  type: string
  num: number
}

const emptyBet = {
	type: '',
	numbers: [1]
};

const initState: BetStateTypes = {
	currentBet: [emptyBet],
	incompleteBet: [emptyBet]
};

const betStateSlice = createSlice({
	name: 'betState',
	initialState: initState,
	reducers: {
		currentBetHander(state, action: PayloadAction<BetValueProp>){
			const type = action.payload.type;
			const num = action.payload.num;
			const curBet = state.currentBet.find(bet => bet.type === type);

			if(curBet){
				const index = curBet.numbers.findIndex(item => item === num);
				index === -1
					? curBet.numbers.push(num)
					: curBet.numbers.splice(index, 1);
			} else{
				state.currentBet = [{
					type: type,
					numbers: [num]
				}];
			}
		},

		icompleteBetHandler(state, action: PayloadAction<BetType>){
			const type = action.payload.type;
			const curIncompleteBet = state.incompleteBet.find(bet => bet.type === type);
			const curBet = state.currentBet.find(bet => bet.type === type);

			if(curIncompleteBet && curBet){
        state.incompleteBet.find(bet => bet.type === type)!.numbers.push(...curBet.numbers);
			} else {
				state.incompleteBet = [
					...state.incompleteBet,
					{
						type: type,
						numbers: action.payload.numbers
					}];
			}
		}
	}
});

export const betStateActions = betStateSlice.actions;
export default betStateSlice;
