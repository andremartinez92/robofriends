// @flow

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './RobotsScreen.css';
import { type RobotData } from '../types';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ScrollableSection from '../components/ScrollableSection';
import ErrorBoundary from '../components/ErrorBoundary';
import filterRobotsBySearch from '../helpers/filterRobotsBySearch';

import { changeSearchField } from '../middleware/actions';

function RobotsScreen() {
  const dispatch = useDispatch();
  const [robots, setRobots] = React.useState<RobotData[]>([]);

  const searchField: string = useSelector(state => state.searchField);

  const setSearchField: Function = (searchField: string) =>
    dispatch(changeSearchField(searchField));

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
      <SearchBox onSearchChange={setSearchField} />
      <ScrollableSection>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </ScrollableSection>
    </div>
  );
}

export default RobotsScreen;
