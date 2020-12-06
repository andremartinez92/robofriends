import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { LOADING_TEXT, NO_DATA_TEXT, ROBOTS, ROBOTS_TEXT } from '../RobotsTestHelpers';

import RobotsList from '../RobotsList';

describe('RobotsList', () => {
    it('shows loading screen when loading', () => {
        const wrapper = mount(<RobotsList isPending robots={[]}/>)

        expect(wrapper.text()).toEqual(LOADING_TEXT);
    })

    it('shows no content message when it does not retrieve content', () => {
        const wrapper = mount(<RobotsList isPending={false} robots={[]}/>)

        // Disabling lint to make test more readable
        /* eslint-disable no-useless-concat */
        expect(wrapper.text()).toEqual(NO_DATA_TEXT);
    })

    it('shows robots when it receives data', () => {
        const wrapper = mount(<RobotsList isPending={false} robots={ROBOTS}/>)

        const Cards = wrapper.find('Card');
        expect(Cards).toHaveLength(2);
        /* eslint-disable no-useless-concat */
        expect(wrapper.text()).toEqual(ROBOTS_TEXT);
    })
})