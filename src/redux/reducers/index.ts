import type { Action, AppState } from "./types";

const initialState: AppState = {
  donate: 0,
  message: '',
};

export const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return {
        ...state,
        donate: action.amount || 0,
      };
    case 'UPDATE_MESSAGE':
      return {
        ...state,
        message: action.message || '',
      };
    case 'REMOVE_MESSAGE':
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
