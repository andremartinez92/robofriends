import React from 'react';
import { shallow } from 'enzyme';

import ScrollableSection from '../ScrollableSection';

describe('<ScrollableSection>', () => {
  describe('when has no children', () => {
    it('renders the expected component', () => {
      const subject = shallow(<ScrollableSection />);
      expect(subject).toMatchSnapshot();
    });
  });

  describe('when has one child', () => {
    it('renders the expected component', () => {
      const subject = shallow(
        <ScrollableSection>
          <div>Hello</div>
        </ScrollableSection>
      );
      expect(subject).toMatchSnapshot();
    });
  });

  describe('when has multiple children', () => {
    it('renders the expected component', () => {
      const subject = shallow(
        <ScrollableSection>
          <div>Hello</div>
          <div>World</div>
        </ScrollableSection>
      );
      expect(subject).toMatchSnapshot();
    });
  });
});
