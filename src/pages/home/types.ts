export interface ReduxState {
  donate: number;
  message: string;
}

export interface Charity {
  id: number;
  currency: string;
  image: string
  name: string;
}
