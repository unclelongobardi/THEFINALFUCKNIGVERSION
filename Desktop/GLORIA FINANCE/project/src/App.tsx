import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DAppPage from './pages/DAppPage';
import WhitepaperPage from './pages/WhitepaperPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dapp" element={
          <ErrorBoundary>
            <DAppPage />
          </ErrorBoundary>
        } />
        <Route path="/whitepaper" element={
          <ErrorBoundary>
            <WhitepaperPage />
          </ErrorBoundary>
        } />
      </Routes>
    </Router>
  );
}

export default App;