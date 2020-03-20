import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

describe('<Card>', () => {
  const props = {
    email: 'test@test.com',
    id: 12,
    name: 'some name',
  };

  it('renders the expected component', () => {
    const subject = shallow(<Card {...props} />);
    expect(subject).toMatchSnapshot();
  });
});
