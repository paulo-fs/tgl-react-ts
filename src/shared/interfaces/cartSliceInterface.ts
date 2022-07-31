export interface BetList {
  id: string
  type: string
  numbers: number[]
  price: number
  color: string
}

export interface InitStateType {
  betList: BetList[] | null
  cartTotalValue: number
  firstRender: boolean
}

export interface addToCartPayloadType {
  type: string
  numbers: number[]
  price: number
  color: string
}
