import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App.jsx';
import { store } from './store/store.js';
import { loadUser } from './store/slices/AuthenticationSlice.js';
import reportWebVitals from './reportWebVitals';

store.dispatch(loadUser(null))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
