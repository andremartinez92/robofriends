import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../App';

describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders the robots container', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('RobotsContainer')).toHaveLength(1);
  });
});
