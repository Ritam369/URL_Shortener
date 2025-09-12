// Environment-based configuration
const isProduction = import.meta.env.MODE === 'production';
const isDevelopment = import.meta.env.MODE === 'development';

export const getDomainPreview = () => {
  if (isProduction) {
    // In production, use the current window location
    return `${window.location.origin}/`;
  }
  // In development, show localhost backend
  return process.env.VITE_BACKEND_URL || 'http://localhost:5000/';
};

export const getApiBaseUrl = () => {
  if (isProduction) {
    // In production, API is on the same domain
    return '';
  }
  // In development, proxy to backend
  return '';
};

export const getShortUrlDomain = () => {
  if (isProduction) {
    // In production, short URLs use the current domain
    return window.location.origin;
  }
  // In development, short URLs use localhost:5000
  return 'http://localhost:5000';
};
