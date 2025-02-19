import React from 'react';
import './LoadingSpinner.css'; // Import CSS file for spinner styling

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
