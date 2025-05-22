import React, { useState } from 'react';
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
  // State for URL input field
  const [inputUrl, setInputUrl] = useState('https://petstore.swagger.io/v2/swagger.json');

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
      
      <div className="swagger-ui-container">
        <SwaggerUI
          url={specUrl}
          docExpansion="list"
        />
      </div>
    </div>
  );
};

export default SwaggerContainer;
