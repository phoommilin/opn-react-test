import React from 'react';
import ReactDOM from 'react-dom'; // Use 'react-dom' instead of 'react-dom/client'
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

interface AppState {
  donate: number;
  message: string;
}

interface Action {
  type: string;
  amount?: number;
  message?: string;
}

const reducer = (state: AppState | undefined, action: Action): AppState => {
  const _state = state || {
    donate: 0,
    message: '',
  };

  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return {
        ..._state,
        donate: action.amount || 0,
      };
    case 'UPDATE_MESSAGE':
      return {
        ..._state,
        message: action.message || '',
      };
    default:
      return _state;
  }
};

const store: Store<AppState, Action> = createStore(reducer);

// Render the app using ReactDOM.render
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}
