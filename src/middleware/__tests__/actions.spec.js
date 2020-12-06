import { ROBOTS } from '../../testHelpers/RobotsTestHelpers';
import { changeSearchField, getRobots } from '../actions';
import { CHANGE_SEARCH_FIELD_TYPE, GET_ROBOTS_TYPES } from '../constants';

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
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    fetch.resetMocks();
  });

  describe('returned function', () => {
    it('dispatches the REQUEST action on call', async () => {
      const actionDispatchFn = getRobots();
      await actionDispatchFn(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        { type: GET_ROBOTS_TYPES.REQUEST, payload: {} }
      )
    })

    it('dispatches the SUCCESS action on call', async () => {
      fetch.mockResponse(JSON.stringify(ROBOTS))
      const actionDispatchFn = getRobots();
      await actionDispatchFn(dispatch);

      expect(dispatch.mock.calls).toEqual(
        [
          [{ type: GET_ROBOTS_TYPES.REQUEST, payload: {} }],
          [{ type: GET_ROBOTS_TYPES.SUCCESS, payload: { robots: ROBOTS } }]
        ]
      )
    })

    it('dispatches the FAILURE action on rejection', async () => {
      const error = new Error('some error');
      fetch.mockReject(error);
      const actionDispatchFn = getRobots();
      await actionDispatchFn(dispatch);

      expect(dispatch.mock.calls).toEqual(
        [
          [{ type: GET_ROBOTS_TYPES.REQUEST, payload: {} }],
          [{ type: GET_ROBOTS_TYPES.FAILURE, payload: { error } }]
        ]
      )
    })
  })
})
