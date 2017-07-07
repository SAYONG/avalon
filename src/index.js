import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'

import './firebase'
import './index.css';
import {Content, Header} from './app/view';
import reduxStore from './app/state/store'
import router from './app/router'
import {routingActions} from './app/state/ducks/routing'
//import registerServiceWorker from './registerServiceWorker';

import Raven from 'raven-js'
Raven
    .config('https://6de9e0627af64ec6892f132a04c62625@sentry.io/188598')
    .install()

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

  router.start('/starting', () => {
    reduxStore.dispatch(routingActions.started())
  })
}
//registerServiceWorker();

init()
