import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import RobotsList from '../RobotsList';

describe('RobotsList', () => {
    it('shows loading screen when loading', () => {
        const wrapper = mount(<RobotsList isPending robots={[]}/>)

        expect(wrapper.text()).toEqual('Loading...');
    })

    it('shows no content message when it does not retrieve content', () => {
        const wrapper = mount(<RobotsList isPending={false} robots={[]}/>)

        // Disabling lint to make test more readable
        /* eslint-disable no-useless-concat */
        expect(wrapper.text()).toEqual('Could not retrieve content' + 'Please check your internet connection.');
    })

    it('shows robots when it receives data', () => {
        const robots = [
            {
                email: 'something@email.com',
                id: 1,
                name: 'Robo 1',
                username: 'robo1'
            },
            {
                email: 'random@email.com',
                id: 2,
                name: 'Robo 2',
                username: 'robo2'
            },
        ]

        const wrapper = mount(<RobotsList isPending={false} robots={robots}/>)

        const Cards = wrapper.find('Card');
        expect(Cards).toHaveLength(2);
        /* eslint-disable no-useless-concat */
        expect(wrapper.text()).toEqual('Robo 1' + 'something@email.com' + 'Robo 2' + 'random@email.com');
    })
})