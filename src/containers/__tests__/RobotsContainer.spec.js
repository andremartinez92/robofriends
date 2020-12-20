import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../middleware/reducers';
import {
  NO_DATA_TEXT,
  ROBO1_TEXT,
  ROBOTS,
  ROBOTS_TEXT,
  TITLE_TEXT,
} from '../../testHelpers/RobotsTestHelpers';

import RobotsContainer from '../RobotsContainer';

const initialState = {
  search: { searchField: '' },
  robots: { isPending: false, robots: [] },
};

function createMockStore(state) {
  return createStore(rootReducer, state, applyMiddleware(thunk));
}

function createWrapper(store) {
  return mount(
    <Provider store={store}>
      <RobotsContainer />
    </Provider>,
  );
}

describe('<RobotsContainer>', () => {
  let mockedStore;
  beforeEach(() => {
    mockedStore = createMockStore(initialState);
    fetch.resetMocks();
  });

  describe('when mounted', () => {
    it('fetches the data from the expected URL', async () => {
      fetch.mockResponse(JSON.stringify([]));
      await ReactTestUtils.act(async () => {
        createWrapper(mockedStore);
      });

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://jsonplaceholder.typicode.com/users',
      );
    });
  });

  describe('when receives empty data from URL', () => {
    it('renders correctly', async () => {
      fetch.mockResponse(JSON.stringify([]));
      let wrapper;
      await ReactTestUtils.act(async () => {
        wrapper = createWrapper(mockedStore);
      });

      expect(wrapper.find('Card')).toHaveLength(0);
      expect(wrapper.text()).toEqual(TITLE_TEXT + NO_DATA_TEXT);
    });
  });

  describe('when receives data from URL', () => {
    describe('when search field is empty', () => {
      it('renders all results', async () => {
        fetch.mockResponse(JSON.stringify(ROBOTS));

        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockedStore);
        });

        wrapper.update();
        wrapper.update();

        expect(wrapper.find('RobotsScreen')).toHaveLength(1);
        expect(wrapper.text()).toEqual(TITLE_TEXT + ROBOTS_TEXT);
      });
    });

    describe('when search field has text', () => {
      it('renders only results that match search', async () => {
        mockedStore = createMockStore({
          ...initialState,
          search: { searchField: '1' },
        });

        fetch.mockResponse(JSON.stringify(ROBOTS));
        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockedStore);
        });

        wrapper.update();

        expect(wrapper.find('RobotsScreen')).toHaveLength(1);
        expect(wrapper.text()).toEqual(TITLE_TEXT + ROBO1_TEXT);
      });
    });
  });

  describe('when search field is changed', () => {
    it('dispatches the expected action', async () => {
      fetch.mockResponse(JSON.stringify(ROBOTS));
      const spy = jest.spyOn(mockedStore, 'dispatch');

      let wrapper;
      await ReactTestUtils.act(async () => {
        wrapper = createWrapper(mockedStore);
      });

      const { onSearchChange } = wrapper.find('RobotsScreen').props();
      onSearchChange('a');

      expect(spy).toHaveBeenCalledWith({
        payload: { searchField: 'a' },
        type: 'CHANGE_SEARCH_FIELD',
      });
    });
  });
});
