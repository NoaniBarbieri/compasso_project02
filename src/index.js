import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage'
import { GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
)
