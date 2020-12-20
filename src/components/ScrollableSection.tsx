import React from 'react';

const styles = {
  overflow: 'scroll',
  height: '800px',
};

interface Props {
  children: React.ReactNode;
}

function ScrollableSection(props: Props): JSX.Element {
  const { children } = props;
  return <div style={styles}>{children}</div>;
}

export default ScrollableSection;
