import React from 'react';
import './App.css';
import SwaggerContainer from './components/SwaggerContainer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

/**
 * Main application component for ReactSwaggerExplorer
 * @returns {React.Component} The App component
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> ReactSwaggerExplorer
            </div>
            <a 
              href="https://github.com/swagger-api/swagger-ui" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="app-header">
            <h1>React Swagger Explorer</h1>
            <p className="description">
              Interactive API documentation and exploration tool powered by Swagger UI.
              Enter an OpenAPI/Swagger spec URL below to begin exploring.
            </p>
          </div>
          
          <ErrorBoundary>
            <SwaggerContainer />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

export default App;