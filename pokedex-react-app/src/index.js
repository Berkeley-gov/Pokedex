import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PokedexApp from './app/PokedexApp';
import reportWebVitals from './app/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokedexApp />
  </React.StrictMode>
);

// Analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
