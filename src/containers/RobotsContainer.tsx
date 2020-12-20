import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RobotsScreen from '../components/RobotsScreen';

import filterRobotsBySearch from '../helpers/filterRobotsBySearch';
import { changeSearchField, getRobots } from '../middleware/actions';

import { RobotData } from '../types';
import { SearchRobotsState, RobotsState } from '../middleware/types';

function RobotsContainer(): JSX.Element {
  const dispatch = useDispatch();

  const searchField: string = useSelector(
    (state: { search: SearchRobotsState }) => state.search.searchField,
  );
  const { isPending, robots } = useSelector(
    (state: { robots: RobotsState }) => state.robots,
  );

  function setSearchField(searchField: string): void {
    dispatch(changeSearchField(searchField));
  }

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
  );
}

export default RobotsContainer;
