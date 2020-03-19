import React from 'react';
import renderer from 'react-test-renderer';

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
    const tree = renderer.create(<CardList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
