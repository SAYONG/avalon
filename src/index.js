import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'
import './index.css';
import {Content} from './app/view';
import reduxStore from './app/state/store'
import router from './app/router'
import {routingActions} from './app/state/ducks/routing'
//import registerServiceWorker from './registerServiceWorker';

async function render(component, element) {
  return new Promise((resolve) => {
    ReactDOM.render(component, element, (...args) => {
      resolve(args)
    })
  })
}

async function init() {
  await render((
    <ReduxProvider store={reduxStore}>
      <Content />
    </ReduxProvider>
  ), document.getElementById('root'))

  router.start('/home', () => {
    reduxStore.dispatch(routingActions.started())
  })
}
//registerServiceWorker();

init()
