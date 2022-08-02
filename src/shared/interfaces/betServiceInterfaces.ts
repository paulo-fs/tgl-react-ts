export interface IBets {
  games: Game[];
}

export interface IGames {
  games: IBets
}

export interface Game {
  game_id: number;
  numbers: number[];
}

export interface IBetResponse {
  message: string
}

export interface IBetService{
  getBetsData: () => Promise<IAllBets[]>,
  postBetsData: ({games}: IGames) => Promise<IGames>
}

export interface IAllBets {
  id:              number;
  user_id:         number;
  game_id:         number;
  choosen_numbers: number[];
  price:           number;
  created_at:      Date;
  type:            IAllBetGameType;
}

export interface IAllBetGameType {
  id:    number;
  type:  string;
  color: string;
}
