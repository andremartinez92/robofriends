// @flow

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RobotsScreen from '../components/RobotsScreen';

import filterRobotsBySearch from '../helpers/filterRobotsBySearch';
import { changeSearchField, getRobots } from '../middleware/actions';

import { type RobotData } from '../types';

function RobotsContainer() {
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
    <RobotsScreen
      isPending={isPending} 
      onSearchChange={setSearchField} 
      robots={filteredRobots}
    />
  )
}

export default RobotsContainer;
