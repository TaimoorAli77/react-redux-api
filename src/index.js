import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './app/Store';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
);
