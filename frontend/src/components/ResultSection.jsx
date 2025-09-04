import React, { useState } from 'react';

const ResultSection = ({ result, onReset }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.shortUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = result.shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.download = `qr-code-${Date.now()}.png`;
    link.href = result.qrCode;
    link.click();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="result-section">
      <h2>
        <i className="fas fa-check-circle"></i>
        Success!
      </h2>
      
      <div className="result-card">
        <div className="original-url">
          <label>Original URL:</label>
          <div className="url-display">{result.originalUrl}</div>
        </div>
        
        <div className="short-url">
          <label>Short URL:</label>
          <div className="url-display">
            <input
              type="text"
              value={result.shortUrl}
              readOnly
            />
            <button
              className={`copy-btn ${copySuccess ? 'copied' : ''}`}
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          </div>
        </div>
        
        <div className="qr-code-section">
          <label>QR Code:</label>
          <div className="qr-code-container">
            <img
              src={result.qrCode}
              alt="QR Code"
              className="qr-code-image"
            />
            <button className="download-btn" onClick={downloadQRCode}>
              <i className="fas fa-download"></i>
              Download QR Code
            </button>
          </div>
        </div>
        
        <div className="stats">
          <div className="stat-item">
            <i className="fas fa-calendar"></i>
            <span>Created: {formatDate(result.createdAt)}</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-mouse-pointer"></i>
            <span>Clicks: {result.clickCount || 0}</span>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="new-url-btn" onClick={onReset}>
            <i className="fas fa-plus"></i>
            Create Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
