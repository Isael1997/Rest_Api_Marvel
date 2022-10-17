import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cards from './Cards';
import Master from './Master';
import Hello from './Hello';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Master/>
  </React.StrictMode>
);

