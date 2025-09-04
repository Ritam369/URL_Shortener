import React from 'react';

const ErrorSection = ({ message, onRetry }) => {
  return (
    <div className="error-section">
      <div className="error-card">
        <i className="fas fa-exclamation-triangle"></i>
        <h3>Oops! Something went wrong</h3>
        <p>{message}</p>
        <button className="retry-btn" onClick={onRetry}>
          <i className="fas fa-redo"></i>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorSection;
