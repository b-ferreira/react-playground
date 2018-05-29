import '@/styles/index.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import App from '@/components/App'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

const { store, history } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
