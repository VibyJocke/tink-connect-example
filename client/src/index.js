import React from 'react';
import ReactDOM from 'react-dom';
import './css/stil.css';
import './css/foundation.css';
import './css/app.css';
import './css/spinner.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { unregister as unregisterServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

unregisterServiceWorker();
