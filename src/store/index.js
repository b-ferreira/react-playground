import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '@/redux_modules'

const history = createHistory()
const middleware = routerMiddleware(history)

function configureStore(initialState) {
  return {
    store: createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(
        thunk,
        middleware
      ))
    ),
    history
  }
}

export default configureStore
