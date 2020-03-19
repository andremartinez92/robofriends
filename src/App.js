// @flow

import React from 'react';

import './App.css';
import { type RobotData } from './types';
import CardList from './components/CardList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import filterRobotsBySearch from './logic/filterRobotsBySearch';

function App() {
  const [robots, setRobots] = React.useState([]);
  const [searchField, setSearchField] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      response.json().then(robots => setRobots(robots));
    }

    fetchData();
  }, []);

  const memoizedFilteredRobots: RobotData[] = React.useMemo(
    () => filterRobotsBySearch(robots, searchField),
    [robots, searchField]
  );

  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={event => setSearchField(event.target.value)} />
      <CardList robots={memoizedFilteredRobots} />
    </div>
  );
}

export default App;
