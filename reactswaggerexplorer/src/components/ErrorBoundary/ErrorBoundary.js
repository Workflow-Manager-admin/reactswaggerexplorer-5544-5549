import React, { Component } from 'react';

/**
 * ErrorBoundary component to catch errors in React components
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '20px', backgroundColor: '#ffebee', border: '1px solid #ef9a9a', borderRadius: '4px' }}>
          <h2 style={{ color: '#c62828' }}>Something went wrong.</h2>
          <p>The API documentation could not be loaded. Please try again later or use a different API specification URL.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{ 
              padding: '10px 15px',
              backgroundColor: '#c62828', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
