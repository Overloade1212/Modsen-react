import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Проверьте, что файл App.jsx или App.js лежит в папке src/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
