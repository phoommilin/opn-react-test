import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

// Define the shape of your state
interface AppState {
  donate: number;
  message: string;
}

// Define the shape of actions
interface Action {
  type: string;
  amount?: number;
  message?: string;
}

// Define a reducer function with types
const reducer = (state: AppState | undefined, action: Action): AppState => {
  const _state = state || {
    donate: 0,
    message: '',
  };

  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return {
        ..._state,
        donate: _state.donate + (action.amount || 0),
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

// Create the store with typed reducer
const store: Store<AppState, Action> = createStore(reducer);

// Create a root and render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
