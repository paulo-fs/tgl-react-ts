export interface IGames {
  getGamesData: () => Promise<IGameResponse>
}

export interface IGameResponse {
  min_cart_value: number;
  types:          GamesDataTypes[];
}

interface GamesDataTypes {
  id:          number;
  type:        string;
  description: string;
  range:       number;
  price:       number;
  max_number:  number;
  color:       string;
}
