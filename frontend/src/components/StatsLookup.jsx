import React, { useState } from 'react';
import axios from 'axios';
import { getApiBaseUrl } from '../utils/config';

const StatsLookup = () => {
  const [shortId, setShortId] = useState('');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = getApiBaseUrl();

  const fetchStats = async (e) => {
    e.preventDefault();
    
    if (!shortId.trim()) {
      setError('Please enter a valid short URL or ID');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setStats(null);

      // Extract shortId from full URL if provided
      let extractedId = shortId.trim();
      if (extractedId.includes('/')) {
        extractedId = extractedId.split('/').pop();
      }

      const response = await axios.get(`${API_BASE_URL}/api/stats/${extractedId}`, {
        timeout: 10000,
      });

      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      
      let errorMessage = 'Failed to fetch statistics. Please try again.';
      
      if (error.response?.status === 404) {
        errorMessage = 'Short URL not found. Please check the URL and try again.';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (error.code === 'ERR_NETWORK') {
        errorMessage = 'Network error. Please check if the backend server is running.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setShortId('');
    setStats(null);
    setError(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="stats-lookup-section">
      <div className="stats-header">
        <div className="stats-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <h2>URL Analytics</h2>
        <p>View detailed statistics for your shortened URLs</p>
      </div>

      <form onSubmit={fetchStats} className="stats-form">
        <div className="input-group">
          <label htmlFor="shortId">Enter Short URL or ID</label>
          <input
            type="text"
            id="shortId"
            value={shortId}
            onChange={(e) => setShortId(e.target.value)}
            placeholder="e.g., abc123 or http://localhost:5000/abc123"
            disabled={loading}
          />
          <small className="help-text">
            Enter the short URL ID or paste the complete short URL
          </small>
        </div>
        
        <div className="stats-actions">
          <button 
            type="submit" 
            className="stats-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Loading...
              </>
            ) : (
              <>
                <i className="fas fa-search"></i>
                Get Statistics
              </>
            )}
          </button>
          
          {(stats || error) && (
            <button 
              type="button" 
              className="reset-btn"
              onClick={resetForm}
            >
              <i className="fas fa-times"></i>
              Clear
            </button>
          )}
        </div>
      </form>

      {error && (
        <div className="stats-error">
          <div className="error-content">
            <i className="fas fa-exclamation-triangle"></i>
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        </div>
      )}

      {stats && (
        <div className="stats-results">
          <div className="stats-card">
            <div className="stats-card-header">
              <i className="fas fa-chart-bar"></i>
              <h3>URL Statistics</h3>
            </div>
            
            <div className="stats-grid">
              <div className="stat-box clicks">
                <div className="stat-value">{stats.clickCount}</div>
                <div className="stat-label">
                  <i className="fas fa-mouse-pointer"></i>
                  Total Clicks
                </div>
              </div>
              
              <div className="stat-box type">
                <div className="stat-value">
                  {stats.isCustom ? 'Custom' : 'Auto'}
                </div>
                <div className="stat-label">
                  <i className="fas fa-tag"></i>
                  URL Type
                </div>
              </div>
              
              <div className="stat-box created">
                <div className="stat-value">
                  {formatDate(stats.createdAt).date}
                </div>
                <div className="stat-label">
                  <i className="fas fa-calendar"></i>
                  Created On
                </div>
                <div className="stat-time">
                  {formatDate(stats.createdAt).time}
                </div>
              </div>
            </div>

            <div className="url-details">
              <div className="url-detail">
                <label>Short ID:</label>
                <div className="url-value">
                  <code>{stats.shortID}</code>
                  <button 
                    className="copy-id-btn"
                    onClick={() => copyToClipboard(stats.shortID)}
                    title="Copy Short ID"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
              
              <div className="url-detail">
                <label>Original URL:</label>
                <div className="url-value">
                  <a 
                    href={stats.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="original-link"
                  >
                    {stats.originalUrl}
                  </a>
                  <button 
                    className="copy-url-btn"
                    onClick={() => copyToClipboard(stats.originalUrl)}
                    title="Copy Original URL"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="stats-actions-bottom">
              <button 
                className="view-url-btn"
                onClick={() => window.open(`http://localhost:5000/${stats.shortID}`, '_blank')}
              >
                <i className="fas fa-external-link-alt"></i>
                Visit Short URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsLookup;
