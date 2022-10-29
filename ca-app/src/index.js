import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter } from "react-router-dom";
import { createHashHistory } from "history"
import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';

const history = createHashHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={"caApp" + '/'} history={history}>
    <App />
  </BrowserRouter>

);

reportWebVitals();

serviceWorker.register();