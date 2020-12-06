import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { NO_DATA_TEXT, ROBO1_TEXT, ROBOTS, ROBOTS_TEXT, TITLE_TEXT } from '../RobotsTestHelpers';

import RobotsScreen from '../RobotsScreen';

const initialState = {
  search: { searchField: '' },
  robots: { isPending: false, robots: [] },
};

function createWrapper(store) {
  return mount(
    <Provider store={store}>
      <RobotsScreen />
    </Provider>
  );
}

describe('<RobotsScreen>', () => {
  const mockStore = configureMockStore([thunk]);
  let mockedStore;

  beforeEach(() => {
    fetch.resetMocks();
    mockedStore = mockStore(initialState);
  });

  describe('when mounted', () => {
    it('fetches the data from the expected URL', async () => {
      fetch.mockResponse(JSON.stringify([]));
      await ReactTestUtils.act(async () => {
        createWrapper(mockedStore);
      });

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://jsonplaceholder.typicode.com/users'
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

  describe.skip('when receives data from URL', () => {
    describe('when search field is empty', () => {
      it('renders all results', async () => {
        fetch.mockResponse(JSON.stringify(ROBOTS));
        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockedStore);
        });

        wrapper.update();
        wrapper.update();

        expect(wrapper.find('Card')).toHaveLength(3);
        expect(wrapper.text()).toEqual(TITLE_TEXT + ROBOTS_TEXT);
      });
    });

    describe('when search field has text', () => {
      it('renders only results that match search', async () => {
        mockedStore = mockStore({ searchField: '1' });

        fetch.mockResponse(JSON.stringify(ROBOTS));
        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockedStore);
        });

        wrapper.update();

        expect(wrapper.find('Card')).toHaveLength(1);
        expect(wrapper.text()).toEqual(TITLE_TEXT + ROBO1_TEXT);
      });
    });
  })

  describe('when search field is changed', () => {
    it('dispatches the expected action', async () => {
      fetch.mockResponse(JSON.stringify(ROBOTS));
      const spy = jest.spyOn(mockedStore, 'dispatch');

      let wrapper;
      await ReactTestUtils.act(async () => {
        wrapper = createWrapper(mockedStore);
      });

      const { onSearchChange } = wrapper.find('SearchBox').props();
      onSearchChange('a');

      expect(spy).toHaveBeenCalledWith({
        payload: { searchField: 'a' },
        type: 'CHANGE_SEARCH_FIELD',
      });
    });
  });
});
