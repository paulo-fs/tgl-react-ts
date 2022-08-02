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
  getBetsData: () => Promise<IBetResponse>,
  postBetsData: ({games}: IGames) => Promise<IGames>
}

