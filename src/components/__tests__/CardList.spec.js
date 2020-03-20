import React from 'react';
import { shallow } from 'enzyme';

import CardList from '../CardList';

describe('<CardList>', () => {
  const props = {
    robots: [
      {
        email: 'test@test.com',
        id: 12,
        name: 'some name',
      },
      {
        email: 'dev@dev.com',
        id: 34,
        name: 'dev robot',
      },
    ],
  };

  it('renders the expected component', () => {
    const subject = shallow(<CardList {...props} />);
    expect(subject).toMatchSnapshot();
  });
});
