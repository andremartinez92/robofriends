import {
  RobotsState,
  SearchRobotsState,
  SearchRobotsAction,
  RequestGetRobotsAction,
  SuccessGetRobotsAction,
  FailureGetRobotsAction,
} from './types';
import {
  CHANGE_SEARCH_FIELD_TYPE,
  GET_ROBOTS_FAILURE_TYPE,
  GET_ROBOTS_REQUEST_TYPE,
  GET_ROBOTS_SUCCESS_TYPE,
} from './constants';
import { combineReducers } from 'redux';

const searchInitialState: SearchRobotsState = {
  searchField: '',
};

export function searchRobotsReducer(
  state: SearchRobotsState = searchInitialState,
  action: SearchRobotsAction,
): SearchRobotsState {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD_TYPE:
      return { ...state, searchField: action.payload.searchField };

    default:
      return state;
  }
}

const getRobotsInitialState: RobotsState = {
  isPending: false,
  robots: [],
  error: '',
};

export function getRobotsReducer(
  state: RobotsState = getRobotsInitialState,
  action:
    | RequestGetRobotsAction
    | SuccessGetRobotsAction
    | FailureGetRobotsAction,
): RobotsState {
  switch (action.type) {
    case GET_ROBOTS_REQUEST_TYPE:
      return { ...state, isPending: true };
    case GET_ROBOTS_SUCCESS_TYPE:
      return { ...state, robots: action.payload.robots, isPending: false };
    case GET_ROBOTS_FAILURE_TYPE:
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
