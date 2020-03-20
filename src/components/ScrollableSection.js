// @flow

import React from 'react';

const styles = {
  overflow: 'scroll',
  height: '800px',
};

type Props = {
  children: React$Element<*>,
};

function ScrollableSection(props: Props) {
  const { children } = props;
  return <div style={styles}>{children}</div>;
}

export default ScrollableSection;
