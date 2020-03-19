// @flow

import React from 'react';

import './RobotsScreen.css';
import { type RobotData } from '../types';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ScrollableSection from '../components/ScrollableSection';
import filterRobotsBySearch from '../logic/filterRobotsBySearch';

function RobotsScreen() {
  const [robots, setRobots] = React.useState([]);
  const [searchField, setSearchField] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const robots = await response.json();
      setRobots(robots);
    }

    fetchData();
  }, []);

  const filteredRobots: RobotData[] = filterRobotsBySearch(robots, searchField);

  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={event => setSearchField(event.target.value)} />
      <ScrollableSection>
        <CardList robots={filteredRobots} />
      </ScrollableSection>
    </div>
  );
}

export default RobotsScreen;
