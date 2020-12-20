import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './App.css';
import rootReducer from './middleware/reducers';
import RobotsContainer from './containers/RobotsContainer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f: any) => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), reduxDevTools)
);

function App() {
  return (
    <Provider store={store}>
      <RobotsContainer />
    </Provider>
  );
}

export default App;
