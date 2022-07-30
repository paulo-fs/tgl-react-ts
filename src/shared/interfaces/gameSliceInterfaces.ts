import { GamesDataTypes } from './gamesServicesInterface';

export interface GameTypes extends GamesDataTypes{
  betNumbers: number[]
}

export interface BetType{
  type: string
  numbers: number[]
}

export interface selectGamePropTypes{
  id: number
  incompleteBet: BetType[]
}
