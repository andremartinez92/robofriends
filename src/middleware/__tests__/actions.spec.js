import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { ROBOTS } from '../../testHelpers/RobotsTestHelpers';
import { CHANGE_SEARCH_FIELD_TYPE, GET_ROBOTS_TYPES } from '../constants';

import { changeSearchField, getRobots } from '../actions';

describe('#changeSearchField', () => {
  it('should create an action to change search field', () => {
    const searchField = 'new search text';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD_TYPE,
      payload: { searchField },
    };

    expect(changeSearchField(searchField)).toEqual(expectedAction);
  });
});

describe('#getRobots', () => {
  let mockedStore;
  beforeEach(() => {
    fetch.resetMocks();
    mockedStore = configureMockStore([thunk])(undefined);
  });


  it('dispatches success after fetching', () => {
    fetch.mockResponse(JSON.stringify(ROBOTS))

    const expectedActions = [
      { type: GET_ROBOTS_TYPES.REQUEST, payload: {} },
      { type: GET_ROBOTS_TYPES.SUCCESS, payload: { robots: ROBOTS } }
    ];

    expect.assertions(1);
    return mockedStore.dispatch(getRobots()).then(() => {
      expect(mockedStore.getActions()).toEqual(expectedActions)
    })
  })

  it('dispatches failure after rejection', () => {
    const error = new Error('some error');
    fetch.mockReject(error)

    const expectedActions = [
      { type: GET_ROBOTS_TYPES.REQUEST, payload: {} },
      { type: GET_ROBOTS_TYPES.FAILURE, payload: { error } }
    ];

    expect.assertions(1);
    return mockedStore.dispatch(getRobots()).then(() => {
      expect(mockedStore.getActions()).toEqual(expectedActions)
    })
  })
})
