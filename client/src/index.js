import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
