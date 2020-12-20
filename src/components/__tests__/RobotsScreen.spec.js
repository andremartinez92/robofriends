import React from 'react';
import { shallow } from 'enzyme';
import { ROBOTS } from '../../testHelpers/RobotsTestHelpers';

import RobotsScreen from '../RobotsScreen';

describe('RobotsScreen', () => {
  it('renders correctly when loading', () => {
    const wrapper = shallow(<RobotsScreen isPending robots={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when there are no robots', () => {
    const wrapper = shallow(<RobotsScreen isPending={false} robots={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when there are robots', () => {
    const wrapper = shallow(<RobotsScreen isPending={false} robots={ROBOTS} />);
    expect(wrapper).toMatchSnapshot();
  });
});
