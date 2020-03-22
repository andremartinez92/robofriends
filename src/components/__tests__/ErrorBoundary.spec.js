import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '../ErrorBoundary';

describe('<ErrorBoundary>', () => {
  describe('when no JS errors are caught in a child component', () => {
    const subject = shallow(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );

    it('renders the child component', () => {
      expect(subject.find('div').text()).toEqual('Hello World');
    });

    it('should not update the state', () => {
      expect(subject.instance().state.hasError).toBeFalsy();
    });

    it('does not render the error component', () => {
      expect(subject.find('h1').exists()).toBeFalsy();
    });
  });

  describe('when a JS error is caught in a child component', () => {
    const subject = shallow(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );
    subject.instance().componentDidCatch('error thrown');
    subject.update();

    it('renders the error component', () => {
      expect(subject.find('h1').text()).toEqual(
        'Oops. Something went wrong here.'
      );
    });

    it('should update the state to indicate an error', () => {
      expect(subject.instance().state.hasError).toBeTruthy();
    });

    it('does not render the child component', () => {
      expect(subject.find('div').exists()).toBeFalsy();
    });
  });
});
