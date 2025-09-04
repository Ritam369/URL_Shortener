import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <i className="fas fa-spinner fa-spin"></i>
      <p>Creating your short link...</p>
    </div>
  );
};

export default LoadingSpinner;
