import React, { useState } from 'react';
import axios from 'axios';
import { getApiBaseUrl } from '../utils/config';
import Header from './Header';
import URLForm from './URLForm';
import LoadingSpinner from './LoadingSpinner';
import ResultSection from './ResultSection';
import ErrorSection from './ErrorSection';
import StatsLookup from './StatsLookup';
import Footer from './Footer';
import './URLShortener.css';

const URLShortener = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('shorten'); // 'shorten' or 'stats'

  const API_BASE_URL = getApiBaseUrl();

  const shortenUrl = async (originalUrl, customAlias = '') => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const requestBody = { originalUrl };
      if (customAlias.trim()) {
        requestBody.customAlias = customAlias.trim();
      }

      const response = await axios.post(`${API_BASE_URL}/api/shorten`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });

      setResult(response.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
      
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.response?.data?.message) {
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
    setResult(null);
    setError(null);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    resetForm();
  };

  const handleViewStats = (shortId) => {
    setActiveTab('stats');
    // The StatsLookup component will handle the shortId
    // We could pass it as a prop if needed
  };

  return (
    <div className="url-shortener">
      <div className="container">
        <Header />
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'shorten' ? 'active' : ''}`}
            onClick={() => switchTab('shorten')}
          >
            <i className="fas fa-magic"></i>
            Shorten URL
          </button>
          <button 
            className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => switchTab('stats')}
          >
            <i className="fas fa-chart-line"></i>
            View Statistics
          </button>
        </div>
        
        <main className="main-content">
          {activeTab === 'shorten' && (
            <>
              <URLForm onSubmit={shortenUrl} loading={loading} />
              
              {loading && <LoadingSpinner />}
              
              {result && (
                <ResultSection 
                  result={result} 
                  onReset={resetForm}
                  onViewStats={handleViewStats}
                />
              )}
              
              {error && (
                <ErrorSection 
                  message={error} 
                  onRetry={resetForm}
                />
              )}
            </>
          )}

          {activeTab === 'stats' && (
            <StatsLookup />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default URLShortener;
