import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';

const onSearchChange = jest.fn();

describe('<SearchBox>', () => {
  it('renders the expected component', () => {
    const subject = shallow(<SearchBox onSearchChange={onSearchChange} />);

    expect(subject).toMatchSnapshot();
  });

  describe('.onSearchChange', () => {
    const subject = shallow(<SearchBox onSearchChange={onSearchChange} />);

    describe('when an event is triggered', () => {
      const event = {
        preventDefault() {
          return null;
        },
        target: { value: 'new search text' },
      };

      it('calls .onSearchChange with the search text', () => {
        subject.find('input').simulate('change', event);

        expect(onSearchChange).toHaveBeenCalledTimes(1);
        expect(onSearchChange).toHaveBeenCalledWith('new search text');
      });
    });
  });
});
