// @flow

import { type Action } from '../types';
import { CHANGE_SEARCH_FIELD_TYPE } from './constants';

type State = {
  searchField: string,
};

const initialState: State = { searchField: '' };

function searchRobotsReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD_TYPE:
      return { ...state, searchField: action.payload.searchField };

    default:
      return state;
  }
}

export default searchRobotsReducer;
