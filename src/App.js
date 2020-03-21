import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import searchRobots from './middleware/reducers';
import RobotsScreen from './containers/RobotsScreen';

const store: Object = createStore(
  searchRobots,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <RobotsScreen />
    </Provider>
  );
}

export default App;
