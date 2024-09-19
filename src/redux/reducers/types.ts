export interface AppState {
  donate: number;
  message: string;
}

export interface Action {
  type: string;
  amount?: number;
  message?: string;
}