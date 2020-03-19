import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../Card';

describe('<Card>', () => {
  const props = {
    email: 'test@test.com',
    id: 12,
    name: 'some name',
  };

  it('renders the expected component', () => {
    const tree = renderer.create(<Card {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
