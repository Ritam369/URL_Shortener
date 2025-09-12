// Environment-based configuration
const isProduction = import.meta.env.MODE === 'production';
const isDevelopment = import.meta.env.MODE === 'development';

export const getDomainPreview = () => {
  if (isProduction) {
    // In production, use the current window location
    return `${window.location.origin}/`;
  }
  // In development, show localhost backend
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/';
};

export const getApiBaseUrl = () => {
  // Always use the environment variable for API calls
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
};

export const getShortUrlDomain = () => {
  // Always use the environment variable for short URL domain
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
};
