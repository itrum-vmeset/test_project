import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/authStore';

interface State {
  authStore: Store,
}

export const authStore = new Store();

export const Context = createContext<State>({
  authStore,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      authStore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);