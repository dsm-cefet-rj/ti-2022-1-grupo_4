import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

function handleClickCotacoesDiarias() {
  alert('Cotações Diárias!');
}
