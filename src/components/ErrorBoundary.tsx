import React from 'react';

interface Props {
  children: React.ReactNode;
}

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Oops. Something went wrong here.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
