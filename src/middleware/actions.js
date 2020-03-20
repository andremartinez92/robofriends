// @flow

import { CHANGE_SEARCH_FIELD_TYPE } from './constants';

export function changeSearchField(searchField: string) {
  return { type: CHANGE_SEARCH_FIELD_TYPE, payload: { searchField } };
}
