import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';

const onSearchChange = jest.fn();

describe('<SearchBox>', () => {
  it('renders the expected component', () => {
    const tree = renderer
      .create(<SearchBox onSearchChange={onSearchChange} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('.onSearchChange', () => {
    const subject = shallow(<SearchBox onSearchChange={onSearchChange} />);

    describe('when an event is triggered', () => {
      const event = {
        preventDefault() {},
        target: { value: 'new search text' },
      };

      it('calls .onSearchChange with the expected arguments', () => {
        subject.find('input').simulate('change', event);

        expect(onSearchChange).toHaveBeenCalledTimes(1);
        expect(onSearchChange).toHaveBeenCalledWith(event);
      });
    });
  });
});