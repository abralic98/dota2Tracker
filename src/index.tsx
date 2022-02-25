import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Storage} from "./context/ContextApi"
ReactDOM.render(
  <React.StrictMode>
    <Storage>
      <App />
    </Storage>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
