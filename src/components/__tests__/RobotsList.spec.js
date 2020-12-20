import React from 'react';
import { mount } from 'enzyme';
import {
  LOADING_TEXT,
  NO_DATA_TEXT,
  ROBOTS,
  ROBOTS_TEXT,
} from '../../testHelpers/RobotsTestHelpers';

import RobotsList from '../RobotsList';

describe('RobotsList', () => {
  it('shows loading screen when loading', () => {
    const wrapper = mount(<RobotsList isPending robots={[]} />);
    expect(wrapper.text()).toEqual(LOADING_TEXT);
    const Cards = wrapper.find('Card');
    expect(Cards).toHaveLength(0);
  });

  it('shows no content message when it does not retrieve content', () => {
    const wrapper = mount(<RobotsList isPending={false} robots={[]} />);

    const Cards = wrapper.find('Card');
    expect(Cards).toHaveLength(0);
    // Disabling lint to make test more readable
    /* eslint-disable-next-line no-useless-concat */
    expect(wrapper.text()).toEqual(NO_DATA_TEXT);
  });

  it('shows robots when it receives data', () => {
    const wrapper = mount(<RobotsList isPending={false} robots={ROBOTS} />);

    const Cards = wrapper.find('Card');
    expect(Cards).toHaveLength(2);
    /* eslint-disable-next-line no-useless-concat */
    expect(wrapper.text()).toEqual(ROBOTS_TEXT);
  });
});
