// Utility functions for handling domains and URLs

export const getDomainPreview = () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, use the current domain (your Vercel domain)
    return `${window.location.host}/`;
  } else {
    // In development, show the backend domain for clarity
    return 'localhost:5000/';
  }
};

export const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, use same origin (Vercel handles the routing)
    return '';
  } else {
    // In development, proxy handles this, so use empty string
    return '';
  }
};
