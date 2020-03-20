import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import RobotsScreen from '../RobotsScreen';

describe('<RobotsScreen>', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('when mounted', () => {
    it('fetches the data from the expected URL', async () => {
      fetch.mockResponse(JSON.stringify([]));
      await ReactTestUtils.act(async () => {
        mount(<RobotsScreen />);
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
      let subject;
      await ReactTestUtils.act(async () => {
        subject = mount(<RobotsScreen />);
      });

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

    describe('when no search is applied', () => {
      it('renders all results', async () => {
        fetch.mockResponse(JSON.stringify(data));
        let subject;
        await ReactTestUtils.act(async () => {
          subject = mount(<RobotsScreen />);
        });

        await ReactTestUtils.act(async () => {
          subject.update();
        });

        expect(subject).toMatchSnapshot();
        expect(subject.find('Card')).toHaveLength(3);
      });
    });

    describe('when search is applied', () => {
      const event = {
        preventDefault() {},
        target: { value: 'a' },
      };

      it('renders only results that match search', async () => {
        fetch.mockResponse(JSON.stringify(data));
        let subject;
        await ReactTestUtils.act(async () => {
          subject = mount(<RobotsScreen />);
        });

        await ReactTestUtils.act(async () => {
          subject.update();
          subject.find('input').simulate('change', event);
        });

        await ReactTestUtils.act(async () => {
          subject.update();
        });

        expect(subject).toMatchSnapshot();
        expect(subject.find('Card')).toHaveLength(2);
      });
    });
  });
});
