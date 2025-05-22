import React, { useState, useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './SwaggerContainer.css';

// PUBLIC_INTERFACE
/**
 * SwaggerContainer component - Main container for the React Swagger Explorer
 * 
 * This component provides an interactive UI for exploring and testing APIs using
 * Swagger/OpenAPI specifications. Users can input a URL to an API specification
 * or use the default one provided.
 * 
 * @returns {React.Component} The SwaggerContainer component
 */
const SwaggerContainer = () => {
  // State for storing the current API spec URL
  const [specUrl, setSpecUrl] = useState('https://petstore.swagger.io/v2/swagger.json');
  // State for handling API loading errors
  const [error, setError] = useState(null);
  // State for tracking loading status
  const [isLoading, setIsLoading] = useState(true);
  // State for URL input field
  const [inputUrl, setInputUrl] = useState('https://petstore.swagger.io/v2/swagger.json');

  // Reset error state when specUrl changes
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    // In a real implementation, we might want to verify the URL is valid before setting it
  }, [specUrl]);

  /**
   * Handles the submission of a new API spec URL
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUrl && inputUrl.trim() !== '') {
      setSpecUrl(inputUrl.trim());
    }
  };

  /**
   * Handles successful loading of the Swagger UI
   */
  const onSwaggerUILoad = () => {
    setIsLoading(false);
  };

  /**
   * Handles errors that occur during Swagger UI loading or rendering
   */
  const onSwaggerUIError = () => {
    setError('Failed to load the API specification. Please check the URL and try again.');
    setIsLoading(false);
  };

  return (
    <div className="swagger-container">
      <div className="swagger-header">
        <h2>API Documentation Explorer</h2>
        <form onSubmit={handleSubmit} className="url-input-form">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter Swagger/OpenAPI specification URL"
            className="url-input"
          />
          <button type="submit" className="btn url-submit-btn">Load API</button>
        </form>
      </div>
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button 
            className="btn retry-btn" 
            onClick={() => {
              setError(null);
              setIsLoading(true);
              // Try loading the default API if there was an error
              setSpecUrl('https://petstore.swagger.io/v2/swagger.json');
              setInputUrl('https://petstore.swagger.io/v2/swagger.json');
            }}
          >
            Load Default API
          </button>
        </div>
      )}
      
      {isLoading && !error && (
        <div className="loading-indicator">
          <p>Loading API documentation...</p>
        </div>
      )}
      
      <div className={`swagger-ui-container ${error ? 'hidden' : ''}`}>
        <SwaggerUI
          url={specUrl}
          onComplete={onSwaggerUILoad}
          onFailure={onSwaggerUIError}
          docExpansion="list"
          deepLinking={true}
          filter={true}
          persistAuthorization={true}
        />
      </div>
    </div>
  );
};

export default SwaggerContainer;
