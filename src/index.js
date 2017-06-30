import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'
import './index.css';
import App from './App';
import reduxStore from './app/state/store'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>
), document.getElementById('root'));
//registerServiceWorker();
