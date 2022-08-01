export interface BetList {
  id: string
  gameId: number
  type: string
  numbers: number[]
  price: number
  color: string
}

export interface InitStateType {
  betList: BetList[] | null
  cartTotalValue: number
  firstRender: boolean
  minCartValue: number
}

export interface addToCartPayloadType {
  type: string
  gameId: number
  numbers: number[]
  price: number
  color: string
}
