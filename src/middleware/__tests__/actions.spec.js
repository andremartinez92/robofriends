import { changeSearchField } from '../actions';

describe('actions', () => {
  it('should create an action to change search field', () => {
    const searchField = 'new search text';
    const expectedAction = {
      type: 'CHANGE_SEARCH_FIELD',
      payload: { searchField },
    };

    expect(changeSearchField(searchField)).toEqual(expectedAction);
  });
});
