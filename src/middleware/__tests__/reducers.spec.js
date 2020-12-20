import { getRobotsReducer, searchRobotsReducer } from '../reducers';

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

  it('should handle default case', () => {
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
});

describe('getRobotsReducer', () => {
  const initialState = {
    isPending: false,
    robots: [],
    error: '',
  };

  const robots = [{ name: 'aa', id: 1, email: 'a@a.com' }];

  it('should return the initial state', () => {
    const store = getRobotsReducer(undefined, {});
    expect(store).toEqual(initialState);
  });

  it('should handle GET_ROBOTS_REQUEST', () => {
    const store = getRobotsReducer(undefined, {
      type: 'GET_ROBOTS_REQUEST',
      payload: {},
    });

    expect(store).toEqual({ ...initialState, isPending: true });
  });

  it('should handle GET_ROBOTS_SUCCESS', () => {
    const store = getRobotsReducer(undefined, {
      type: 'GET_ROBOTS_SUCCESS',
      payload: { robots },
    });

    expect(store).toEqual({ ...initialState, robots });
  });

  it('should handle GET_ROBOTS_FAILURE', () => {
    const error = 'some error';
    const store = getRobotsReducer(undefined, {
      type: 'GET_ROBOTS_FAILURE',
      payload: { error },
    });

    expect(store).toEqual({ ...initialState, error });
  });

  it('should handle default case', () => {
    const store = getRobotsReducer(
      { ...initialState, robots },
      { type: 'UNMATCHED_TYPE', payload: { robots: [] } }
    );
    expect(store).toEqual({ ...initialState, robots });
  });
});
