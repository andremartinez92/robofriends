import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header>', () => {
  it('renders the expected component', () => {
    const subject = shallow(<Header />);
    expect(subject).toMatchSnapshot();
  });
});
