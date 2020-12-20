import { apiCall } from './api';
import { CHANGE_SEARCH_FIELD_TYPE, GET_ROBOTS_TYPES } from './constants';

import { Dispatch } from 'redux';
import { RobotData } from '../types';
import { Action } from './types';

export function changeSearchField(searchField: string): Action {
  return { type: CHANGE_SEARCH_FIELD_TYPE, payload: { searchField } };
}

export function getRobots() {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_ROBOTS_TYPES.REQUEST, payload: {} });
    return apiCall<RobotData[]>('https://jsonplaceholder.typicode.com/users')
      .then(data =>
        dispatch({ type: GET_ROBOTS_TYPES.SUCCESS, payload: { robots: data } })
      )
      .catch(error =>
        dispatch({ type: GET_ROBOTS_TYPES.FAILURE, payload: { error } })
      );
  };
}
