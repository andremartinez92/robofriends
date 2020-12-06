import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './App.css';
import rootReducer from './middleware/reducers';
import RobotsScreen from './containers/RobotsScreen';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const store: Object = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), reduxDevTools)
);

function App() {
  return (
    <Provider store={store}>
      <RobotsScreen />
    </Provider>
  );
}

export default App;