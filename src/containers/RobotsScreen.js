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

import { changeSearchField, getRobots } from '../middleware/actions';

function RobotsScreen() {
  const dispatch = useDispatch();

  const searchField: string = useSelector(state => state.search.searchField);
  const { isPending, robots } = useSelector(state => state.robots);

  const setSearchField: Function = (searchField: string) =>
    dispatch(changeSearchField(searchField));

  React.useEffect(() => {
    dispatch(getRobots());
  }, [dispatch]);

  const filteredRobots: RobotData[] = filterRobotsBySearch(robots, searchField);

  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={setSearchField} />
      {(isPending && <h1>Loading...</h1>) || (
        <ScrollableSection>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </ScrollableSection>
      )}
    </div>
  );
}

export default RobotsScreen;
