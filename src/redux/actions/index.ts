import { UPDATE_MESSAGE, UPDATE_TOTAL_DONATE } from '../../constants'

export const updateTotalDonate = (amount: number) => {
  return {
    type: UPDATE_TOTAL_DONATE,
    amount,
  };
};

export const updateMessage = (message: string) => {
  return {
    type: UPDATE_MESSAGE,
    message,
  };
};

export const removeMessage = () => {
  return {
    type: UPDATE_MESSAGE,
    message: '',
  };
};
