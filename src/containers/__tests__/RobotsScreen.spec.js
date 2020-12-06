import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

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

// TODO
describe.skip('<RobotsScreen>', () => {
  let mockStore;
  beforeEach(() => {
    fetch.resetMocks();
    mockStore = configureMockStore([])(initialState);
  });

  describe('when mounted', () => {
    it('fetches the data from the expected URL', async () => {
      fetch.mockResponse(JSON.stringify([]));
      await ReactTestUtils.act(async () => {
        createWrapper(mockStore);
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
        wrapper = createWrapper(mockStore);
      });

      const subject = wrapper.find('RobotsScreen');
      expect(subject).toMatchSnapshot();
      expect(subject.find('Card')).toHaveLength(0);
    });
  });

  describe('when receives data from URL', () => {
    const data = [
      { name: 'default', email: 'default@email1.com', id: 1 },
      { name: 'ninja', email: 'email@email2.com', id: 2 },
      { name: 'robot', email: 'email@email3.com', id: 3 },
    ];

    describe('when search field is empty', () => {
      it('renders all results', async () => {
        fetch.mockResponse(JSON.stringify(data));
        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockStore);
        });

        wrapper.update();

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Card')).toHaveLength(3);
      });
    });

    describe('when search field has text', () => {
      it('renders only results that match search', async () => {
        mockStore = configureMockStore([])({ searchField: 'a' });

        fetch.mockResponse(JSON.stringify(data));
        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockStore);
        });

        wrapper.update();

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Card')).toHaveLength(2);
      });
    });

    describe('when search field is changed', () => {
      it('dispatches the expected action', async () => {
        fetch.mockResponse(JSON.stringify(data));
        const spy = jest.spyOn(mockStore, 'dispatch');

        let wrapper;
        await ReactTestUtils.act(async () => {
          wrapper = createWrapper(mockStore);
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
});
