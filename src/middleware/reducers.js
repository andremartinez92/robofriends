// @flow

import { type Action, type RobotData } from '../types';
import { CHANGE_SEARCH_FIELD_TYPE, GET_ROBOTS_TYPES } from './constants';
import { combineReducers } from 'redux';

type SearchRobotsState = {
  searchField: string,
};

const searchInitialState: SearchRobotsState = {
  searchField: '',
};

export function searchRobotsReducer(
  state: SearchRobotsState = searchInitialState,
  action: Action = {}
): SearchRobotsState {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD_TYPE:
      return { ...state, searchField: action.payload.searchField };

    default:
      return state;
  }
}

type RobotsState = {
  isPending: boolean,
  robots: Array<RobotData>,
  error: string,
};

const getRobotsInitialState: RobotsState = {
  isPending: false,
  robots: [],
  error: '',
};

export function getRobotsReducer(
  state: RobotsState = getRobotsInitialState,
  action: Action = {}
): RobotsState {
  switch (action.type) {
    case GET_ROBOTS_TYPES.REQUEST:
      return { ...state, isPending: true };
    case GET_ROBOTS_TYPES.SUCCESS:
      return { ...state, robots: action.payload.robots, isPending: false };
    case GET_ROBOTS_TYPES.FAILURE:
      return { ...state, error: action.payload.error, isPending: false };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search: searchRobotsReducer,
  robots: getRobotsReducer,
});

export default rootReducer;
