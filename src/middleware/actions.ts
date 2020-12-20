import { apiCall } from './api';
import {
  CHANGE_SEARCH_FIELD_TYPE,
  GET_ROBOTS_FAILURE_TYPE,
  GET_ROBOTS_REQUEST_TYPE,
  GET_ROBOTS_SUCCESS_TYPE,
} from './constants';

import { Dispatch } from 'redux';
import { RobotData } from '../types';
import { SearchRobotsAction } from './types';

export function changeSearchField(searchField: string): SearchRobotsAction {
  return { type: CHANGE_SEARCH_FIELD_TYPE, payload: { searchField } };
}

export function getRobots() {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_ROBOTS_REQUEST_TYPE, payload: {} });
    return apiCall<RobotData[]>('https://jsonplaceholder.typicode.com/users')
      .then((data) =>
        dispatch({ type: GET_ROBOTS_SUCCESS_TYPE, payload: { robots: data } }),
      )
      .catch((error) =>
        dispatch({ type: GET_ROBOTS_FAILURE_TYPE, payload: { error } }),
      );
  };
}
