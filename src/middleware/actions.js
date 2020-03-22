// @flow

import { type Dispatch } from 'redux';
import { CHANGE_SEARCH_FIELD_TYPE, GET_ROBOTS_TYPES } from './constants';

export function changeSearchField(searchField: string) {
  return { type: CHANGE_SEARCH_FIELD_TYPE, payload: { searchField } };
}

export function getRobots() {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_ROBOTS_TYPES.REQUEST, payload: {} });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>
        dispatch({ type: GET_ROBOTS_TYPES.SUCCESS, payload: { robots: data } })
      )
      .catch(error =>
        dispatch({ type: GET_ROBOTS_TYPES.FAILURE, payload: { error } })
      );
  };
}
