import React from 'react'
import ReactDOM from 'react-dom'
import { Welcome } from './welcome'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { init as initSocket } from './socket';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxPromise))
)

// store.subscribe(()=>{
//     console.log("store changed", store.getState());
// })
const elem = (
  <Provider store={store}>
    <App />
  </Provider>
)

if (location.pathname === '/welcome') {
  ReactDOM.render(<Welcome />, document.querySelector('main'))
} else {
  ReactDOM.render(elem, document.querySelector('main'))
  // initSocket(store)
}
