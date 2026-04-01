import { Text } from "@chakra-ui/react";
import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class GameGridErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorMessage: "",
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  render() {
    if (this.state.hasError) {
      return <Text>{this.state.errorMessage}</Text>;
    }

    return this.props.children;
  }
}

export default GameGridErrorBoundary;
