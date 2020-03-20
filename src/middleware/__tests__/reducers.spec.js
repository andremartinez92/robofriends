import searchRobotsReducer from '../reducers';

describe('searchRobotsReducer', () => {
  it('should return the initial state', () => {
    expect(searchRobotsReducer(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      searchRobotsReducer(
        {},
        {
          type: 'CHANGE_SEARCH_FIELD',
          payload: { searchField: 'bla bla' },
        }
      )
    ).toEqual({ searchField: 'bla bla' });

    expect(
      searchRobotsReducer(
        { searchField: 'new text' },
        {
          type: 'CHANGE_SEARCH_FIELD',
          payload: { searchField: 'abcdefg' },
        }
      )
    ).toEqual({ searchField: 'abcdefg' });
  });

  expect(
    searchRobotsReducer(
      { searchField: 'new text' },
      {
        type: 'UNMATCHED_TYPE',
        payload: { searchField: 'abcdefg' },
      }
    )
  ).toEqual({ searchField: 'new text' });
});
