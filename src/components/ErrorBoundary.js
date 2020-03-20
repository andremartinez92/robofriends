// @flow

import React from 'react';

type Props = {
  children: React$Element<*>,
};

type State = {
  hasError: boolean,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. Something went wrong here.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
