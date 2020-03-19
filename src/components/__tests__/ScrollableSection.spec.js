import React from 'react';
import renderer from 'react-test-renderer';

import ScrollableSection from '../ScrollableSection';

describe('<ScrollableSection>', () => {
  describe('when has no children', () => {
    it('renders the expected component', () => {
      const tree = renderer.create(<ScrollableSection />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when has one child', () => {
    it('renders the expected component', () => {
      const tree = renderer
        .create(
          <ScrollableSection>
            <div>Hello</div>
          </ScrollableSection>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when has multiple children', () => {
    it('renders the expected component', () => {
      const tree = renderer
        .create(
          <ScrollableSection>
            <div>Hello</div>
            <div>World</div>
          </ScrollableSection>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
