import React from 'react';
import URLShortener from './components/URLShortener';
import './App.css';

function App() {
  console.log('App component is rendering');
  
  return (
    <div className="App">
      <URLShortener />
    </div>
  );
}

export default App;
