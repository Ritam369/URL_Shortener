import React, { useState, useEffect } from 'react';
import { getDomainPreview } from '../utils/config';

const URLForm = ({ onSubmit, loading }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [domainPreview, setDomainPreview] = useState('');

  useEffect(() => {
    setDomainPreview(getDomainPreview());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!originalUrl.trim()) {
      alert('Please enter a valid URL');
      return;
    }

    if (!isValidUrl(originalUrl)) {
      alert('Please enter a valid URL (must start with http:// or https://)');
      return;
    }

    if (customAlias && !isValidAlias(customAlias)) {
      alert('Custom alias can only contain letters, numbers, hyphens, and underscores');
      return;
    }

    onSubmit(originalUrl, customAlias);
  };

  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const isValidAlias = (alias) => {
    return /^[a-zA-Z0-9_-]+$/.test(alias);
  };

  const handleUrlBlur = () => {
    let value = originalUrl.trim();
    if (value && !value.match(/^https?:\/\//)) {
      setOriginalUrl('https://' + value);
    }
  };

  return (
    <div className="url-form-section">
      <form onSubmit={handleSubmit} className="url-form">
        <div className="input-group">
          <label htmlFor="originalUrl">Enter your long URL</label>
          <input
            type="url"
            id="originalUrl"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            onBlur={handleUrlBlur}
            placeholder="https://example.com/very-long-url"
            required
            disabled={loading}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="customAlias">Custom alias (optional)</label>
          <div className="alias-input-container">
            <span className="domain-preview">{domainPreview}</span>
            <input
              type="text"
              id="customAlias"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              placeholder="my-custom-link"
              pattern="[a-zA-Z0-9_-]+"
              title="Only letters, numbers, hyphens, and underscores allowed"
              disabled={loading}
            />
          </div>
          <small className="help-text">Leave empty for random short link</small>
        </div>
        
        <button 
          type="submit" 
          className="shorten-btn"
          disabled={loading}
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Creating...
            </>
          ) : (
            <>
              <i className="fas fa-magic"></i>
              Shorten URL
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default URLForm;
