import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

let preloadedState = {};
if (process.env.NODE_ENV === 'development') {
  const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  preloadedState = reduxDevTool;
}

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk),
);

export default store;
